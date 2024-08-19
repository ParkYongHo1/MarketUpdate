// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage 사용
import userReducer from "../slices/userSlice";
import profileReducer from "../slices/profileSlice";
import productReducer from "../slices/productSlice";
import { combineReducers } from "redux";

// 여러 리듀서를 결합
const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  product: productReducer,
});

// redux-persist 설정
const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux store 설정
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // 비직렬화 가능한 데이터를 허용
    }),
});

// persistor 생성
export const persistor = persistStore(store);

export default store;
