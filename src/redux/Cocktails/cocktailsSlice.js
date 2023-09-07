import { createSlice } from "@reduxjs/toolkit";
import {
  getCategoriesListThunk,
  getCocktailByIdThunk,
  getAllOwnDrinksThunk,
  removeRecipeThunk,
  // fetchMyCoctails,
} from "../Cocktails/cocktailsOperations";

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

// const handlePending = (state) => {
//   state.isLoading = true;
//   state.error = null;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

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
    //Cocktails
    [getCategoriesListThunk.pending]: (state) => {
      state.loading = true;
    },
    [getCategoriesListThunk.fulfilled]: (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
    },
    [getCategoriesListThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },

    [getCocktailByIdThunk.pending]: (state) => {
      state.loading = true;
    },
    [getCocktailByIdThunk.fulfilled]: (state, { payload }) => {
      state.favorites = payload;
      state.backup = payload;

      state.loading = false;
    },
    [getCocktailByIdThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },

    // Own

    [getAllOwnDrinksThunk.pending]: (state) => {
      state.loading = true;
    },
    [getAllOwnDrinksThunk.fulfilled]: (state, { payload }) => {
      state.own = payload.cocktails;
      state.totalHits = payload.totalHits;

      state.loading = false;
    },
    [getAllOwnDrinksThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    [removeRecipeThunk.pending]: (state) => {
      state.loading = true;
    },
    [removeRecipeThunk.fulfilled]: (state, { payload }) => {
      // state.own = state.own.filter((el) => el._id !== payload._id);
      state.status = "succeeded";
      state.isLoading = false;
      state.error = null;

      state.own = state.own.filter((cocktail) => cocktail._id !== payload);
      console.log(payload);

      if (state.own.length === 0) {
        state.own = [];
      }

      state.loading = false;
    },
    [removeRecipeThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },

    // [fetchMyCoctails.pending]: handlePending,

    // [fetchMyCoctails.rejected]: handleRejected,

    // [removeRecipeThunk.rejected]: handleRejected,

    // [fetchMyCoctails.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload.drinks;
    // },

    // [removeRecipeThunk.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;

    //   state.own = state.own.filter(
    //     (cocktail) => cocktail._id !== action.payload
    //   );
    //   console.log(action.payload);

    //   if (state.own.length === 0) {
    //     state.own = [];
    //   }
    // },
  },
});

export const { setQuery, setChosenCategory, setChosenIngredient, setPage } =
  cocktailsSlice.actions;
export const cocktailsReducer = cocktailsSlice.reducer;
