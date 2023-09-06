import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader } from "../auth/operations";
import { selectAuthAccessToken } from "../auth/selectors";
import instance from "../../shared/api/instance";

// Cocktails

export const getCategoriesListThunk = createAsyncThunk(
  "@@cocktails/categoriesList",
  async (_, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    try {
      setAuthHeader(token);
      const res = await instance.get("recipes/category-list");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getCocktailByIdThunk = createAsyncThunk(
  "@@cocktails/byId",
  async (id, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    if (!token) {
      return rejectWithValue();
    }
    setAuthHeader(token);
    try {
      const res = await instance.get(`recipes/id/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

// Own
export const addRecipeThunk = createAsyncThunk(
  "@@cocktails/addRecipe",
  async (data, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    if (!token) {
      return rejectWithValue();
    }
    setAuthHeader(token);
    try {
      let res = null;
      if (data.get("drinkThumb")) {
        res = await instance.post("own", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        res = await instance.post("own", data);
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getAllOwnDrinksThunk = createAsyncThunk(
  "@@cocktails/ownCocktails",
  async ({ page, limit }, { rejectWithValue, getState }) => {
    const token = selectAuthAccessToken(getState());
    if (!token) {
      return rejectWithValue();
    }
    setAuthHeader(token);
    const params = {};
    params.page = page;
    params.limit = limit;
    try {
      const res = await instance.get("/own", {
        params,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

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

export const fetchMyCoctails = createAsyncThunk(
  "mycoktails/fetchAll",
  async (query, thunkAPI) => {
    try {
      const { data } = await instance.get(`/own?${query}`);

      if (!data.drinks.length) {
        return [];
      }
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Failed to load favorites");
    }
  }
);

// export const removeRecipeThunk = createAsyncThunk(
//   "cocktails/deleteCocktail",
//   async (id, thunkAPI) => {
//     try {
//       const response = await instance.delete(`/own/${id}`);

//       return { id, ...response.data };
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
