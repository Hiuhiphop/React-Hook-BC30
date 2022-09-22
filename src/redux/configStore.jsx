import { combineReducers, createStore } from "redux";
import { UseEffectDemoReducer } from "./reducer/UseEffectDemoReducer";

//rootReducer: state tổng của ứng dụng
const rootReducer = combineReducers({
  UseEffectDemoReducer: UseEffectDemoReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
