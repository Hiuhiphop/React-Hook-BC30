import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStateDemo from "./page/HookDemo/UseState/UseStateDemo";
import UseEffectDemo from "./page/HookDemo/UseEffect/UseEffectDemo";
import BaiTapChonXe from "./page/HookDemo/UseState/BaiTapChonXe";
import UseCallBackDemo from "./page/HookDemo/UseCallBackDemo/UseCallBackDemo";
import UseMemoDemo from "./page/HookDemo/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./page/HookDemo/UseRef/UseRefDemo";
import NumberDemo from "./page/HookDemo/useRedux/numberDemo/NumberDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="usestatedemo" element={<UseStateDemo />}></Route>
          <Route path="useeffectdemo" element={<UseEffectDemo />}></Route>
          <Route path="baitapchonxe" element={<BaiTapChonXe />}></Route>
          <Route path="usecallbackdemo" element={<UseCallBackDemo />}></Route>
          <Route path="usememodemo" element={<UseMemoDemo />}></Route>
          <Route path="userefdemo" element={<UseRefDemo />}></Route>
          <Route path="numberdemo" element={<NumberDemo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
