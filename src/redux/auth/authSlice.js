import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { signup, signin, logout, refreshUser, updateAvatar, updateUserName } from "./operations";

const initialState = {
  user: { name: null, email: null, avatarURL: null },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: true,
  error: "",
};

const handlePending = (state) => {
  state.error = "";
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;

        state.accessToken = action.payload.accessToken;
        // state.refreshToken = action.payload.refreshToken;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.user;

        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(signin.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = action.payload.message;
      })

      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.accessToken = null;
        // state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        // state.isRefreshing = true; От Иветы
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.accessToken = localStorage.getItem("accessToken");
        state.refreshToken = localStorage.getItem("refreshToken");
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
        state.isRefreshing = false;
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.user.name = action.payload;
        state.isRefreshing = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected),
});

const authReducer = authSlice.reducer;

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};

export const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
