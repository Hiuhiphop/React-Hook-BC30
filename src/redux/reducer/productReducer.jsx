import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [],
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const { getProductAction, getProductDetailAction } = productReducer.actions;

export default productReducer.reducer;

export const getProductApi = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      // Sau khi lấy dữ liệ từ api về và setState
      console.log(result.data.content);
      // setArrProduct(result.data.content);
      dispatch(getProductAction(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductDetailApi = (id) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET",
      });
      dispatch(getProductDetailAction(result.data.content))
    } catch (err) {
      console.log(err);
    }
  };
};
