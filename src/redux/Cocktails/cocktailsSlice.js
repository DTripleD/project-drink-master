import { createSlice } from "@reduxjs/toolkit";
import { removeRecipeThunk } from "../Cocktails/cocktailsOperations";

const initialState = {
  cocktails: [],
  own: [],
  popular: [],
  categories: [],
  search: { query: "", chosenCategory: "", chosenIngredient: "" },
  totalHits: null,
  page: 1,
  loading: false,
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const cocktailsSlice = createSlice({
  name: "@@cocktails",
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.search.query = payload;
    },
    setChosenCategory: (state, { payload }) => {
      state.search.chosenCategory = payload;
    },
    setChosenIngredient: (state, { payload }) => {
      state.search.chosenIngredient = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: {
    [removeRecipeThunk.rejected]: handleRejected,

    [removeRecipeThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.own = state.own.filter(
        (cocktail) => cocktail._id !== action.payload
      );
      console.log(action.payload);

      if (state.own.length === 0) {
        state.own = [];
      }
    },
  },
});

export const { setQuery, setChosenCategory, setChosenIngredient, setPage } =
  cocktailsSlice.actions;
export const cocktailsReducer = cocktailsSlice.reducer;
