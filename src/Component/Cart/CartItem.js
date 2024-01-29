// import { Button } from "bootstrap";
import React from "react";

const CartItem = () => {
  return (
    <>
      
          <div className="card product-card">
            <div className="card-top">
              <div className="productImg-top">
                <img
                  src="/images/LandingPg/samsung.png"
                  className="card-img-top product-cardImage"
                  alt="..."
                />
              </div>
              <button> <img src="/images/LandingPg/wishlistIcn.png" alt=".." className="wishlist-icon"/></button>
             
            </div>
            <div className="card-body product-body">
              <p className="card-title item-title">Samsung Galaxy S21+ Plus 5G| US Version....</p>
              <div className="item-review">
               <span className="starss">&#9734;&#9734;&#9734;&#9734;&#9734;</span> <span className="custemer-rivew">4000 custemer Review </span>
              </div>
              <p className="item-price">AED 4500.00</p>
              <button className="btn add-cart"><img src="/images/LandingPg/bagIcn.png" alt=".." className="bag-icon"/> Add To Cart</button>
            </div>
          </div>
       
    </>
  );
};

export default CartItem;
