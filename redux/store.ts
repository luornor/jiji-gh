import { configureStore } from "@reduxjs/toolkit";
import { env } from "next-runtime-env";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ListingApi } from "./ListingApi";
import { shopApi } from "./shopApi";

export const store = configureStore({
  reducer: {
    [ListingApi.reducerPath]: ListingApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },

  devTools: env("NEXT_PUBLIC_NODE_ENV") !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      ListingApi.middleware,
      shopApi.middleware
    ]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
