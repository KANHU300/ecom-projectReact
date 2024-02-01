
import Text2Title from "../Title/Text2Title";
import axios from "axios";
import React, { useState, useEffect } from "react";

const ShpMoreCard = () => {
  const [getItems, setItems] = useState([]);
  const APi_URL = "http://192.168.29.47:4000/";
  useEffect (()=>{
    const getMoreReason = async () => {
      try {
        const response = await axios.get(
          `${APi_URL}admin/products/getReasons`
        )
        console.log(response);
        setItems(response.data);
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getMoreReason();

  }, [])
  return (
    <div className="ShopMore-cards">
      <Text2Title text=" Best selling mobiles" />
      <div className="row g-3">
        {getItems.map((item)=>( <div className="col-lg-6 ">
          <div className="shopMore-top">
            <img
              src={item.image}
              alt="..."
              className="CardBanner-insideImge"
            />
          </div>
        </div>))}
       
        

        
      </div>

     
    </div>
  );
};

export default ShpMoreCard;
