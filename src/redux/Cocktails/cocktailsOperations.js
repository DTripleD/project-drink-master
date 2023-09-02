import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader } from "../auth/operations";
import { selectAuthAccessToken } from "../auth/selectors";
import instance from "../../shared/api/instance";
// import Notiflix from "notiflix";

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
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
