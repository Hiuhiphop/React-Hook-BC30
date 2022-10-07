import React, { useCallback, useState } from "react";
import Comment from "./Comment";

export default function UseCallBackDemo() {
  const [like, setLike] = useState(1);
  const [number, setNumber] = useState(1);

  const renderLike = () => {
    return (
      <span>
        bạn đã thả {like} <i className="fa fa-heart text-danger"></i>
      </span>
    );
  };

  const callBackRenderLike = useCallback(renderLike, [like]);
  console.log("demo");
  return (
    <div className="container">
      <h3>number: {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <div className="card w-25">
        <img src="https://i.pravatar.cc" alt="avatar" />
        <div className="card-body">
          <p className="text-danger">
            Like: {like} <i className="fa fa-heart"></i>
          </p>
          <button
            className="btn btn-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Like <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>

      <Comment renderLike={callBackRenderLike} />
    </div>
  );
}
