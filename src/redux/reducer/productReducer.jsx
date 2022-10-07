import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrProduct: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProduct: (state, action) => {
        state.arrProduct = action.payload
    },
  },
});

export const {getProduct} = productReducer.actions;

export default productReducer.reducer;
