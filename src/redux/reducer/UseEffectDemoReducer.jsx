import axios from "axios";
import { useEffect } from "react";

const stateDefault = [];

const getApi = async () => {
  try {
    const result = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    stateDefault.push(result.data.content);
  } catch (err) {
    console.log(err);
  }
};

export const UseEffectDemoReducer = (state = stateDefault, action) => {
  {
    getApi();
  }
  switch (action.type) {
    default:
      return state;
  }
};
