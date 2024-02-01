

import React, { useState, useEffect } from "react";
import axios from "axios";
import Text2Title from "../Title/Text2Title";

const MegaDeals = () => {
  const [getItems, setItems] = useState([]);
  const APi_URL = "http://192.168.29.47:4000/";
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
    // <div className="row mb-4">
    //   <div className="col-md-6">
    <div className="MegaDeals-cards">
      <Text2Title text="Mega Deals" />
      <div className="row g-3">
        {
          getItems.map((products) =>(
            <div className="col-lg-6 ">
            <div className="card MegaDeals-top ">
              <span className="card-topLeft-text">{products.categoryName}</span>
              <div className="row g-0">
                <div className="col-5">
                  <div className="deals-topimage"> <img
                    src={products.thumbnail}
                    className="img-fluid rounded-start deals-image"
                    alt="..."
                  /></div>
                
                 
                </div>
                <div className="col-7">
                  <div className="card-body card-right">
                    <h5 className="card-title">
                     {products.title}
                     
                    </h5>
                    <p className="card-text-price">AED <span>{products.sellingPrice}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          )) 
        }
        
       
      
      </div>

      {/* <div className="card MegaDeals-top ">
        <span className="card-topLeft-text">Mobile & acessories</span>
        <div className="row g-0">
          <div className="col-5">
            <img
              src="/images/LandingPg/Laptop.png"
              className="img-fluid rounded-start deals-image"
              alt="..."
            />
          </div>
          <div className="col-7">
            <div className="card-body card-right">
              <h5 className="card-title">
                Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina
                Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard,.....
              </h5>
              <p className="card-text-price">AED 200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card MegaDeals-top ">
        <span className="card-topLeft-text">Mobile & acessories</span>
        <div className="row g-0">
          <div className="col-5">
            <img
              src="/images/LandingPg/Laptop.png"
              className="img-fluid rounded-start deals-image"
              alt="..."
            />
          </div>
          <div className="col-7">
            <div className="card-body card-right">
              <h5 className="card-title">
                Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina
                Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard,.....
              </h5>
              <p className="card-text-price">AED 200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card MegaDeals-top ">
        <span className="card-topLeft-text">Mobile & acessories</span>
        <div className="row g-0">
          <div className="col-5">
            <img
              src="/images/LandingPg/Laptop.png"
              className="img-fluid rounded-start deals-image"
              alt="..."
            />
          </div>
          <div className="col-7">
            <div className="card-body card-right">
              <h5 className="card-title">
                Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina
                Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard,.....
              </h5>
              <p className="card-text-price">AED 200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card MegaDeals-top ">
        <span className="card-topLeft-text">Mobile & acessories</span>
        <div className="row g-0">
          <div className="col-5">
            <img
              src="/images/LandingPg/Laptop.png"
              className="img-fluid rounded-start deals-image"
              alt="..."
            />
          </div>
          <div className="col-7">
            <div className="card-body card-right">
              <h5 className="card-title">
                Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina
                Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard,.....
              </h5>
              <p className="card-text-price">AED 200</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    //   </div>
    //   <div classNameName="col-md-6"></div>
    // </div>
  );
};

export default MegaDeals;
