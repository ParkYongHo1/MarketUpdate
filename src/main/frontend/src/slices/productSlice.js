import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: {
    title: "",
    price: "",
    category: [],
    content: "",
    product_image: [],
    address: "",
    jibunAddress: "",
    latitude: "",
    longitude: "",
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    write: (state, action) => {
      state.product = { ...state.product, ...action.payload };
    },
    reset: (state) => {
      state.product = initialState.product;
    },
  },
});

export const { write, reset } = productSlice.actions;

export default productSlice.reducer;
