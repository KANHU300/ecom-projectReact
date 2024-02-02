// import React, { useRef, useState } from "react";

import TextTitle from "../../Component/Title/TextTitle";
import CategoryCard from "../../Component/categoryCard/CategoryCard";
// import { Button } from "bootstrap";
import Slider from "../../Component/Slider/Slider";
import Productslidr from "../../Component/Productslidr/Productslidr";
import ShpMoreCard from "../../Component/ShopMore/ShpMoreCard";
import MegaDeals from "../../Component/MegaDeals/MegaDeals";
import MobileBanner from "../../Component/Banners/MobileBanner";
import BiggerBanner from "../../Component/Banners/BiggerBanner";
import MdBanerTop from "../../Component/Banners/MDBanerTop";
// import ProductView from "../../Component/ProductView/ProductView";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductItems from "../../Component/ProductItems/ProductItems";

const Landing = () => {
  const [getItems, setItems] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);

  const APi_URL = "http://192.168.0.59:4000/";
  let navigation = useNavigate();
  useEffect(() => {
    const getMoreReason = async () => {
      try {
        const response = await axios.get(
          `${APi_URL}admin/products/getCategoryWiseProducts`
        );
        console.log("getCategoryWiseProducts", response.data);
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMoreReason();
  }, []);

  useEffect(() => {
    const getAllCartProduct = async () => {
      try {
        const response = await axios.get(
          `${APi_URL}admin/products/BestProducts`
        );
        console.log(response);
        setBestProducts(response.data.bestSellingProducts);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCartProduct();
  }, []);

  return (
    <div className="landingPage-data">
      <Productslidr />
      <div className="categoris-section">
        <div className="container">
          <TextTitle text="Categories" className=" " />

          <CategoryCard />

          <div className="row g-3">
            <div className="col-md-6">
              <ShpMoreCard />
            </div>
            <div className="col-md-6">
              <MegaDeals />
            </div>
          </div>
          <div className="mb-2">
            <Slider />
          </div>
          <MdBanerTop />
        </div>
      </div>
      <div className="container">
        <TextTitle text="Best selling " className="textSub-title" />
        <ProductItems productObj={bestProducts} />

        <div>
          {getItems.map(
            (value, index) =>
              value.category.subcategories.length > 1 && ( // Check if the category index is above or equal to 1
                <div key={index}>
                  <TextTitle
                    text={value.category?.categoryName}
                    className="textSub-title"
                  />
                  <div className="row  g-3">
                    <div className="col-md-5">
                      <BiggerBanner
                        image={value.category?.subcategories[0]?.subThumbnail}
                        name={value.category?.subcategories[0]?.subCategoryName}
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="row mb-4 g-3">
                        {value.category?.subcategories
                          .slice(1)
                          .map((item, subIndex) => (
                            <div key={subIndex} className="col-md-4 col-6">
                              <MobileBanner
                                image={item?.subThumbnail}
                                name={item?.subCategoryName}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  {value.bestSellingProducts.length > 0 && (
                    <div>
                      <TextTitle
                        text="Best sellers "
                        className="textSub-title"
                      />
                      <ProductItems productObj={value.bestSellingProducts} />
                    </div>
                  )}
                  {value.getPriceDropProducts.length > 0 && (
                    <div>
                      <TextTitle
                        text="Price Dropped Products "
                        className="textSub-title"
                      />
                      <ProductItems productObj={value.getPriceDropProducts} />
                    </div>
                  )}

                  {value.CuratedProducts.length > 0 && (
                    <div>
                      <TextTitle
                        text="Curated Products Products "
                        className="textSub-title"
                      />
                      <ProductItems productObj={value.CuratedProducts} />
                    </div>
                  )}
                </div>
              )
          )}
        </div>

        {/* <ProductView /> */}
      </div>
    </div>
  );
};

export default Landing;
