import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    number: (state = 1, action) => {
      switch (action.type) {
        case "TANG_GIAM_SO_LUONG": {
          state = action.payload;
          return state;
        }
        default:
          return state;
      }
    },
  },
});
