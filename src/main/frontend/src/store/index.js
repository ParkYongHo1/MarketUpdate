import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../slices/userSlice";
import profileReducer from "../slices/profileSlice";
import productReducer from "../slices/productSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
