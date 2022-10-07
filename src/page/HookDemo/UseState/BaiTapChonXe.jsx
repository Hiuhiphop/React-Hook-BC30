import React, { useState } from "react";

export default function BaiTapChonXe() {
  const [color, setColor] = useState("./img/BaiTapChonXe/black-car.jpg");
  const changeColor = (colorPick) => {
    setColor(`./img/BaiTapChonXe/${colorPick}-car.jpg`);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={color} alt="Car" className="w-75" />
        </div>
        <div className="col-6">
          <h3>Chọn màu xe</h3>
          <button
            className="btn btn-danger"
            onClick={() => {
              changeColor("red");
            }}
          >
            red
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
              changeColor("black")
            }}
          >
            black
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              changeColor("steel")
            }}
          >
            steel
          </button>
          <button
            className="btn btn-light"
            onClick={() => {
              changeColor("silver")
            }}
          >
            silver
          </button>
        </div>
      </div>
    </div>
  );
}
