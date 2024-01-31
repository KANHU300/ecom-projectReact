// import React, { useRef, useState } from "react";

import TextTitle from "../../Component/Title/TextTitle";
import CategoryCard from "../../Component/categoryCard/CategoryCard";
import CartItem from "../../Component/Cart/CartItem";
// import { Button } from "bootstrap";
import Slider from "../../Component/Slider/Slider";
import Productslidr from "../../Component/Productslidr/Productslidr";
import ShpMoreCard from "../../Component/ShopMore/ShpMoreCard";
import MegaDeals from "../../Component/MegaDeals/MegaDeals";
import MobileBanner from "../../Component/Banners/MobileBanner";
import BiggerBanner from "../../Component/Banners/BiggerBanner";
import MdBanerTop from "../../Component/Banners/MDBanerTop";
import ProductView from "../../Component/ProductView/ProductView";

const Landing = () => {
  return (
    <div className="landingPage-data">
      <Productslidr />

      <div className="categoris-section">
        <div className="container">
          <TextTitle text="Categories" className=" " />
         
              <CategoryCard />
           
          <div className="row mb-4 g-3">
            <div className="col-md-6">
             
              <ShpMoreCard />
            </div>
            <div className="col-md-6">
              <MegaDeals />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Slider />

        {/* <div className="bottom-Banner">
          <span className=" ">In Focus</span>

         
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="banner-imageTop">
                <img
                  className="banner-images"
                  src="/images/LandingPg/banner1.png"
                  alt="no-imge"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-imageTop">
                <img
                  className="banner-images"
                  src="/images/LandingPg/banner1.png"
                  alt="no-imge"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}
        <TextTitle text="Best selling " className="textSub-title" />
        <CartItem />
        {/* <div className="row g-3">
          <div className="col-md-3 col-6  pe-0">
            <CartItem />
          </div>
          <div className="col-md-3 col-6  pe-0">
            <CartItem />
          </div>
          <div className="col-md-3 col-6  pe-0">
            <CartItem />
          </div>
          <div className="col-md-3 col-6  pe-0">
            <CartItem />
          </div>
        </div> */}
        <TextTitle text="Mobile & Acesssories" className="textSub-title" />

        <div className="row mb-4 g-3">
          <div className="col-md-5 ">
           <BiggerBanner/>
          </div>
          <div className="col-md-7 ">
            <div className="row mb-4 g-3">
              <div className="col-md-4 col-6  ">
                <MobileBanner />
              </div>
              <div className="col-md-4 col-6  ">
                <MobileBanner />
              </div>
              <div className="col-md-4 col-6   ">
                <MobileBanner />
              </div>
              <div className="col-md-4 col-6  ">
                <MobileBanner />
              </div>
              <div className="col-md-4 col-6   ">
                <MobileBanner />
              </div>
              <div className="col-md-4 col-6   ">
                <MobileBanner />
              </div>
            </div>
          </div>
        </div>
        <MdBanerTop/>
        <ProductView/>
      </div>
      
    </div>
  );
};

export default Landing;
