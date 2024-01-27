import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import TextTitle from "../../Component/Title/TextTitle";
import CategoryCard from "../../Component/categoryCard/CategoryCard";

const Landing = () => {
  return (
    <div className="landingPage-data">
      <div className="top-Banner">
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
      </div>
      <div className="categoris-section">
        <div className="container">
          <TextTitle text="Categories" className=" " />
          <ul className="list-unstyled category-itemTop">
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
            <li><CategoryCard/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
