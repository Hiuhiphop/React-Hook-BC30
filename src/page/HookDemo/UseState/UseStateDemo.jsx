import React, { useState } from "react";

export default function UseStateDemo() {
  /**
   * useState là hàm của react cung cấp
   * lưu ý: không đc để hàm trong if else hay switch case,..., khai báo trên đầu hàm
   * cấu trúc:
   * [giá trị thay đổi, hàm thay đổi giá trị thay đổi] = useState(giá trị mặc định ban đầu)
   */
  const [like, setLike] = useState(1);
  return (
    <div className="container">
      <div className="card w-25">
        <img src="https://i.pravatar.cc?u=1" alt="avatar" />
        <div className="card-body">
          <h4>Họ tên: Lê Thanh Hiếu</h4>
          <p>Tuổi: 21</p>
          <p>Số Like: {like}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
}
