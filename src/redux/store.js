import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { persistedAuthReducer } from "./auth/authSlice";
import { subscribeReducer } from "./subscribe/subscribeSlice";

import { favoritesReducer } from "./favorite/favoriteSlice";

import { cocktailsReducer } from "./Cocktails/cocktailsSlice";

const persistConfigForCocktails = {
  key: "cocktails",
  version: 3,
  storage,
  whitelist: ["cocktails", "categories"],
};

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    subscribe: subscribeReducer,
    favorites: favoritesReducer,
    cocktails: persistReducer(persistConfigForCocktails, cocktailsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
