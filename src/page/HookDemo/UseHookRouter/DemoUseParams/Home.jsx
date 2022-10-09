import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getProductAction, getProductApi } from "../../../../redux/reducer/productReducer";

export default function Home() {
  // const [arrProduct, setArrProduct] = useState([]);
  // dùng useSelector để lấy từ reducer
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const getAllProductApi = () => {
    const actionThunk = getProductApi();
    dispatch(actionThunk);
  };

  useEffect(() => {
    getAllProductApi();
  }, []);
  const renderProduct = () => {
    return arrProduct.map((prod, index) => {
      return (
        <div className="card col-3 mx-2" key={index}>
          <img src={prod.image} alt="" />
          <div className="card-body">
            <h3>{prod.name}</h3>
            <p>{prod.shortDescription}</p>
            <p>$ {prod.price}</p>
            <button className="btn btn-warning">
              <NavLink to={`/detail/${prod.id}`}>See Detail</NavLink>
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3 className="text-center">Product List</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
