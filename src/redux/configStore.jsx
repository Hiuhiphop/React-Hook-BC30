import { configureStore } from "@reduxjs/toolkit";
import FacebookReducer from "./reducer/FacebookReducer";
import NumberReducer from "./reducer/NumberReducer";
import productReducer from "./reducer/productReducer";

export const store = configureStore({
  reducer: {
    number: NumberReducer,
    FacebookReducer: FacebookReducer,
    productReducer: productReducer,
  },
});
