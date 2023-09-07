import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/api/instance";

export const removeRecipeThunk = createAsyncThunk(
  "cocktails/deleteCocktail",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`own/${id}`);

      if (response.status === 200) {
        return id;
      } else {
        return rejectWithValue("Failed to delete cocktail");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
