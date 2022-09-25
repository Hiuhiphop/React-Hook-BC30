import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNumber } from "../../../../redux/reducer/NumberReducer";

export default function NumberDemo() {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  console.log(number);
  return (
    <div className="container">
      <h3>Number: {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          // const action = {
          //   type: "TANG_GIAM_SO_LUONG",
          //   payload: number + 1,
          // };
          const action = changeNumber(number + 1);
          dispatch(action);
        }}
      >
        +
      </button>
    </div>
  );
}
