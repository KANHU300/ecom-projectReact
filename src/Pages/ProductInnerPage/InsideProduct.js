import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartItem from "../../Component/Cart/CartItem";
import TextTitle from "../../Component/Title/TextTitle";

import MdBanerTop from "../../Component/Banners/MDBanerTop";
import MegaDealsBnr from "../../Component/Banners/MegaDealsBnr";

const InsideProduct = () => {
  const { id } = useParams();
  // const [getItems, setItems] = useState([]);
  const [Products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [getPriceDropd, setPriceDroped] = useState([]);
  const [getBannerImage, setBannerImage] = useState([]);
  const [getCurated, setCurated] = useState([]);

  const APi_URL = "http://192.168.29.47:4000/";
  useEffect(() => {
    debugger
    const getDiscountedProduct = async () => {
      try {
        const response = await axios.get(
          `${APi_URL}admin/products/getAllMegaDeals`
        );
        debugger
        console.log("getAllMegaDeals", response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDiscountedProduct();
  }, []);
  useEffect(() => {
    const getMoreReason = async () => {
      try {
        const response = await axios.get(
          `${APi_URL}admin/products/getCategoryWiseProducts?id=${id}`
        );
        console.log("getCategoryWiseProducts", response.data);
        setBestProducts(response.data.bestSellingProducts);
        setPriceDroped(response.data.getPriceDropProducts);
        setCurated(response.data.CuratedProducts);
        setBannerImage(response.data.categoryInfo.bannerImage)
      } catch (error) {
        console.log(error);
      }
    };
    getMoreReason();
  }, []);

 
  

  return (
    <div className="Product-page">
      <div className="inner-Banner-Top">
        <img
          className="InnerBanner-images"
          src={getBannerImage}
          alt="..."
        />
      </div>
     <div className="container">
     <MegaDealsBnr productObj={Products}/>
     {bestProducts.length > 0 && (
        <div>
          <TextTitle text="Best sellers " className="textSub-title" />
          <CartItem productObj={bestProducts} />
        </div>
      )}

      {getPriceDropd.length > 0 && (
        <div>
          <TextTitle text="Price Dropped " className="textSub-title" />
          <CartItem productObj={getPriceDropd} />
        </div>
      )}

      {getCurated.length > 0 && (
        <div>
          <TextTitle text="Currated Products" className="textSub-title" />
          <CartItem productObj={getCurated} />
        </div>
      )}

     </div>
    </div>
  );
};

export default InsideProduct;
