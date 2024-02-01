import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const CategoryCard = () => {
  const [getCategory, setCategory] = useState([]);
  const [getId, setId] = useState([]);
  const APi_URL = "http://192.168.29.47:4000/";
  const navigate = useNavigate();
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

 function handleItemClick(productId) {
    navigate(`/InsideProduct/${productId}`)
  };
  return (
    <ul className="list-unstyled category-itemTop">
      {getCategory.map((product) => (
        <li>
          <div
            key={product.id}
            onClick={() => handleItemClick(product._id)}
            className="cards-top"
          >
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
