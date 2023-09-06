import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

export const setAuthHeader = (accessToken) => {
  instance.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common["Authorization"] = "";
};

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");

      const { data } = await instance.post("/users/refreshUser", { refreshToken });

      error.config.headers.Authorization = "";
      error.config.headers.Authorization = "Bearer " + data.accessToken;
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const signup = createAsyncThunk("auth/signup", async (credentials, thunkAPI) => {
  try {
    const response = await instance.post("/users/signup", credentials);
    setAuthHeader(response.data.accessToken);

    localStorage.setItem("accessToken", response.data.accessToken);

    localStorage.setItem("refreshToken", response.data.refreshToken);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response);
  }
});

export const signin = createAsyncThunk("auth/signin", async (credentials, thunkAPI) => {
  try {
    const response = await instance.post("/users/signin", credentials);
    setAuthHeader(response.data.accessToken);

    localStorage.setItem("accessToken", response.data.accessToken);

    localStorage.setItem("refreshToken", response.data.refreshToken);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instance.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const persistedToken = localStorage.getItem("accessToken");

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }
  try {
    setAuthHeader(persistedToken);
    const response = await instance.get("/users/current");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateAvatar = createAsyncThunk("auth/updateAvatar", async (file, thunkAPI) => {
  try {
    const formData = new FormData();

    formData.append("avatarURL", file);
    const { data } = await instance.patch("users/avatars", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    return data.avatarURL;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUserName = createAsyncThunk(
  "auth/updateUserName",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.patch("users", { name: credentials });
      return data.name;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
