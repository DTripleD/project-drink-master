export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectIsChanging = (state) => state.auth.isChanging;

export const selectAuthToken = (state) => state.auth.data;
export const selectAuthAccessToken = (state) => state.auth.accessToken;
