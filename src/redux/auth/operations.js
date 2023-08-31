import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import instance from "../../shared/api/instance";

// axios.defaults.baseURL = "https://drink-master-backend.onrender.com";

export const setAuthHeader = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post("/users/signup", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkAPI) => {
    try {
      const response = await instance.post("/users/signin", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instance.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
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
  }
);

export const updateAvatar = createAsyncThunk(
	"auth/updateAvatar",
	async (file, thunkAPI) => {
		try {
			const formData = new FormData();

			formData.append("avatarURL", file);
			const { data } = await instance.patch("users/avatars", formData, {
				headers: {
					"content-type": "multipart/form-data",
				},
			});
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const updateUserName = createAsyncThunk(
	"auth/updateUserName",
	async (credentials, thunkAPI) => {
		try {
			const { data } = await instance.patch("users", credentials);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

