import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    write: (state, action) => {
      state.product = action.payload;
    },
    reset: (state) => {
      state.product = [];
    },
  },
});

export const { write, reset } = productSlice.actions;

export default productSlice.reducer;
