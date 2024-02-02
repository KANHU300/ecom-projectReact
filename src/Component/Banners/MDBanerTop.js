import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import TextTitle from "../Title/TextTitle";

const MdBanerTop = () => {
  const [getItems, setItems] = useState([]);
  const APi_URL = "http://192.168.0.59:4000/";
  useEffect(() => {
    const getDiscountedProduct = async () => {
      try {
        const response = await axios.get(
          `${APi_URL}admin/products/getAllMegaDeals`
        );
        console.log("getAllMegaDeals", response.data);
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDiscountedProduct();
  }, []);
  return (
    <div className="mega-deals-top">
      <TextTitle text="Mega Deals " className="" />
    <div className="row g-2 mb-2">
      {getItems.slice(0, 2).map((item) => (
        <div className="col-6" key={item._id}>
          <div className="Mdeal-BnrTop">
            <img
              className="mdeal-image"
              src={item.dealImageBig}
              alt={item.dealTitle}
            />
          </div>
        </div>
      ))}
    </div>
    <div className="row g-2">
      {getItems.map((item) => (
        <div className="col-md-3 col-6" key={item._id}>
          <div className="Mdeal-BnrBtm">
            <img
              className="mdeal-bottomImage"
              src={item.dealImageSmall}
              alt={item.dealTitle}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default MdBanerTop;
