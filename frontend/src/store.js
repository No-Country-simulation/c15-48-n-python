import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice.js";
import { apiSlice } from "./features/api/apiSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
