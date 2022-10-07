import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const params = useParams();
  const [prodDetail, setProdDetail] = useState({});
  console.log("Product Detail", prodDetail);

  const getProdDetailApi = async () => {
    try {
      let result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
        method: "GET",
      });
      setProdDetail(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProdDetailApi();
  }, []);

  return <div>param: product - {params.id}</div>;
}
