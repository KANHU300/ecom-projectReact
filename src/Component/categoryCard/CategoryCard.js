import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryCard = () => {
  const [getCategory, setCategory] = useState([]);
  const APi_URL = "http://192.168.0.60:4000/";
  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const response = await axios.get(
          `${APi_URL}admin/products/getAllCategory`
        );
        console.log(response);
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategory();
  }, []);
  return (
    <ul className="list-unstyled category-itemTop">
      {getCategory.map((product) => (
        <li>
          <div className="cards-top">
            <div className="Cimg-top">
              <div className="banner-text">
                <p className="text-edit">{product.categoryName}</p>
              </div>
              <img
                src={product.bannerImage}
                alt=""
                className="banner-insideImge"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryCard;
