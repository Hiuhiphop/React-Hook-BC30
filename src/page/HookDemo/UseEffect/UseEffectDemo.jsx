import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const UseEffectDemo = (props) => {
  const [arrProd, setArrProd] = useState([
    {
      name: "hieu",
      image: "./img/BaiTapChonXe/red-car.jpg",
      price: 200,
    },
  ]);

  const renderProduct = () => {
    //gọi api
    return arrProd.map((prod, index) => {
      return (
        <div className="card col-4" key={index}>
          <img src={prod.image} alt={prod.name} />
          <div className="card-body">
            <p>Name: {prod.name}</p>
            <p>Price: {prod.price}</p>
            <button className="btn btn-success">Add to cart</button>
          </div>
        </div>
      );
    });
  };

    const getApi = async () => {
      try {
        const result = await axios({
          url: "https://shop.cyberlearn.vn/api/Product",
          method: "GET",
        });
        setArrProd(result.data.content);
      } catch (err) {
        console.log(err);
      }
    };

  useEffect(() => {
    //dependency(tham số thứ 2 truyền vào là 1 mảng rỗng thì chỉ chạy 1 lần duy nhất trước khi giao diện render)
    //tương đương componentDidMount
    getApi();
  }, []);

  return (
    <div className="container">
      <h3>shoes app</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  UseEffectReducer: state.UseEffectReducer,
});

export default connect(mapStateToProps)(UseEffectDemo);
