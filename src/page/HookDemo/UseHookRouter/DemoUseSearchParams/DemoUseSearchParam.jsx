import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function DemoUseSearchParam() {
  let keywordRef = useRef("");
  const [searchParam, setSearchParam] = useSearchParams();
  let [arrProduct, setArrProduct] = useState([]);
  let timeOutRef = useRef({});

  const getProductKeyword = async () => {
    try {
      let keyword = searchParam.get("keyword");
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product?keyword=" + keyword,
        method: "GET",
      });

      setArrProduct(result.data.content);
      clearTimeout(timeOutRef.current);
    } catch (err) {}
  };
  console.log(arrProduct);

  useEffect(() => {
    if (keywordRef.current !== "") {
      getProductKeyword();
    }
  }, [keywordRef.current]);

  const handleChange = (e) => {
    keywordRef.current = e.target.value;
    timeOutRef.current = setTimeout(() => {
      setSearchParam({ keyword: keywordRef.current });
    }, 1000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h3>Search</h3>
        <div className="form-group">
          <p>Nhập từ khoá</p>
          <div className="input-group-prepend">
            <input
              className="form-control"
              id="keywordRef"
              onChange={handleChange}
            />
            <button className="btn bg-dark text-white">Search</button>
          </div>
        </div>
        <div className="mt-2">
          <p>Kết quả tìm kiếm</p>
          <div className="row">
            {arrProduct?.map((prod, index) => {
              return (
                <div className="card col-3" key={index}>
                  <img src={prod.image} alt="" />
                  <h3>{prod.name}</h3>
                  <p>{prod.shortDescription}</p>
                  <div className="card-footer">
                    <button className="btn btn-warning">Buy</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
}
