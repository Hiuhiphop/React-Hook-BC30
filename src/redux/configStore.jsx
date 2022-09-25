import { configureStore } from "@reduxjs/toolkit";
import FacebookReducer from "./reducer/FacebookReducer";
import NumberReducer from "./reducer/NumberReducer";

export const store = configureStore({
  reducer: {
    number: NumberReducer,
    FacebookReducer: FacebookReducer,
  },
});
