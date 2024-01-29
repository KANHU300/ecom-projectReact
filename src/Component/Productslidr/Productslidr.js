import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Productslidr = () => {
  return (
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
  )
}

export default Productslidr