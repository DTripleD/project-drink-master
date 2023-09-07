import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { getCategories, getGlasses, getIngredients } from "./drinksOperations";

const initialState = {
  categories: [],
  ingredients: [],
  glasses: [],
  isLoading: false,
  error: "",
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const drinksQuerySlice = createSlice({
  name: "drinksQuery",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
        state.error = "";
      })
      .addCase(getGlasses.fulfilled, (state, action) => {
        state.glasses = action.payload;
        state.isLoading = false;
        state.error = "";
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        handleRejected
      ),
});

const drinksQueryReducer = drinksQuerySlice.reducer;

const drinksQueryPersistConfig = {
  key: "drinksQuery",
  storage,
  whitelist: ["categories", "ingredients", "glasses"],
};

export const persistedDrinksQueryReducer = persistReducer(
  drinksQueryPersistConfig,
  drinksQueryReducer
);
