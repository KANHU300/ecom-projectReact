import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
// import required modules
import { Navigation } from "swiper/modules";

const Productslidr = () => {
  const [getBanner, setBanner] = useState([]);
  const APi_URL = "http://192.168.29.47:4000/";
  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const response = await axios.get(
          `${APi_URL}admin/products/getBannerImages`
        );
        console.log(response);
        setBanner(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategory();
  }, []);
  return (
    <div className="top-Banner">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {getBanner.map((banner) => (
          <SwiperSlide>
            <div key={banner.id} className="banner-imageTop">
              <img
                className="banner-images"
                src={banner.image}
                alt="no-imge"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Productslidr;
