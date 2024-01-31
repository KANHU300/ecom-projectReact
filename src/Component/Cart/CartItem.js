// import { Button } from "bootstrap";

import React, { useState, useEffect } from "react";
import axios from "axios";

const CartItem = () => {
  const [getItems, setItems] = useState([]);
  const APi_URL = "http://192.168.0.60:4000/";
  useEffect(() => {
    const getAllCartProduct = async () => {
      try {
        const response = await axios.get(
          `${APi_URL}admin/products/BestProducts`
        );
        console.log(response);
        setItems(response.data.bestSellingProducts);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCartProduct();
  }, []);
  return (
    <>
      <div className="row g-3">
        {getItems.map((products)  => (
          <div className="col-md-3 col-6  pe-0">
            <div className="card product-card">
              <div className="card-top">
                <div className="productImg-top">
                  <img
                    src={products.thumbnail}
                    className="card-img-top product-cardImage"
                    alt="..."
                  />
                </div>
                <button>
                 
                  <img
                    src="/images/LandingPg/wishlistIcn.png"
                    alt=".."
                    className="wishlist-icon"
                  />
                </button>
              </div>
              <div className="card-body product-body">
                <p className="card-title item-title">{products.title}</p>
                <div className="item-review">
                  <span className="starss">
                    &#9734;&#9734;&#9734;&#9734;&#9734;
                  </span>
                  <span className="custemer-rivew">400  </span>
                </div>
                <p className="item-price">AED <span>{products.sellingPrice}</span></p>
                <button className="btn add-cart">
                  <img
                    src="/images/LandingPg/bagIcn.png"
                    alt=".."
                    className="bag-icon"
                  />
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
      ))}
      </div>
    </>
  );
};

export default CartItem;
