import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrComment: [
    { name: "lê thanh hiếu", content: "ahihi" },
    { name: "lê thị kim loan", content: "iu híuus" },
  ],
};

const FacebookReducer = createSlice({
  name: "facebookReducer",
  initialState,
  reducers: {
    submitForm: (state, action) => {
      console.log(action);
      state.arrComment.push({...action.payload});
    },
  },
});

export const { submitForm } = FacebookReducer.actions;

export default FacebookReducer.reducer;
