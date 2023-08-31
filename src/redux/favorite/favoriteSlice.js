import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFavorites,
  addFavorite,
  deleteFavorite,
} from "./favorite-operation";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchFavorites.pending]: handlePending,
    [addFavorite.pending]: handlePending,
    [deleteFavorite.pending]: handlePending,

    [fetchFavorites.rejected]: handleRejected,
    [addFavorite.rejected]: handleRejected,
    [deleteFavorite.rejected]: handleRejected,

    [fetchFavorites.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        (favorite) => favorite._id !== action.payload.recipeId
      );
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
