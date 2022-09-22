import React, { memo } from "react";

function Comment(props) {
  console.log("11231231");
  return (
    <div className="container">
      {props.renderLike()}
      <textarea></textarea> <br />
      <button>Gửi</button>
    </div>
  );
}

export default memo(Comment);
