import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProductDetailApi } from "../../../../redux/reducer/productReducer";

export default function Details() {
  const params = useParams();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.productReducer);

  const getProdDetailApi = () => {
    const actionThunk = getProductDetailApi(params.id);
    dispatch(actionThunk);
  };

  useEffect(() => {
    getProdDetailApi();
  }, [params.id]);

  return (
    <div className="container">
      <h3>Params: Product - {params.id}</h3>
      <div className="row">
        <div className="col-4">
          <img
            className="w-100"
            src={productDetail.image}
            alt={productDetail.name}
          />
        </div>
        <div className="col-8">
          <h1>{productDetail.name}</h1>
          <p>{productDetail.description}</p>
          <p>Price: $ {productDetail.price}</p>
        </div>
      </div>
      <h3>Related Product</h3>
      <div className="row mt-2">
        {/*toán tử ?: optional chaining */}
        {productDetail.relatedProducts?.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <img src={item.image} alt={item.name} />
                <div className="card-body bg-dark text-white">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <NavLink
                    className="btn btn-secondary"
                    to={`/detail/${item.id}`}
                  >
                    View detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
