import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

// axios.defaults.baseURL = "https://drink-master-backend.onrender.com";

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(`/favorite`);

      if (!data.drinks.length) {
        return [];
      }
      return data.drinks;
    } catch (e) {
      return thunkAPI.rejectWithValue("Failed to load favorites");
    }
  }
);

export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async (recipeId, thunkAPI) => {
    try {
      const response = await instance.patch(`/favorite/${recipeId}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  "favorites/deleteFavorite",
  async (recipeId, thunkAPI) => {
    try {
      const response = await instance.delete(`/favorite/${recipeId}`);

      return { recipeId, ...response.data };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
