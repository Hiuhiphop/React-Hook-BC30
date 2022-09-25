import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const NumberReducer = createSlice({
  name: "NumberReducer",
  initialState,
  reducers: {
    changeNumber: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeNumber } = NumberReducer.actions;

export default NumberReducer.reducer;
