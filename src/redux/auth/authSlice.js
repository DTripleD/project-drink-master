import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { signup, signin, logout, refreshUser } from "./operations";

const initialState = {
	user: { name: null, email: null, avatarURL: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
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
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(signin.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = { name: null, email: null };
				state.token = null;
				state.isLoggedIn = false;
			})
			.addCase(refreshUser.pending, (state) => {
				state.isRefreshing = true;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
			})
			.addCase(refreshUser.rejected, (state) => {
				state.isRefreshing = false;
			})
			.addMatcher((action) => action.type.endsWith("/pending"), handlePending)
			.addMatcher(
				(action) => action.type.endsWith("/rejected"),
				handleRejected
			),
});

const authReducer = authSlice.reducer;

const authPersistConfig = {
	key: "auth",
	storage,
	whitelist: ["token"],
};

export const persistedAuthReducer = persistReducer(
	authPersistConfig,
	authReducer
);
