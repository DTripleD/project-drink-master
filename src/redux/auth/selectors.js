export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectAuthToken = (state) => state.auth.data;
export const selectAuthAccessToken = (state) => state.auth.accessToken;
