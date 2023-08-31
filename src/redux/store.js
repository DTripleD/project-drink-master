import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { persistedAuthReducer } from "./auth/authSlice";
import { subscribeReducer } from "./subscribe/subscribeSlice";
import { favoritesReducer } from "./favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    subscribe: subscribeReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
