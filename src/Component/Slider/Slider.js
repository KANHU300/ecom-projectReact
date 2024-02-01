import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

const Slider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      // Custom next button functionality
      const handleNextButtonClick = () => {
        swiperInstance.slideNext();
      };

      // Custom prev button functionality
      const handlePrevButtonClick = () => {
        swiperInstance.slidePrev();
      };

      // Attach event listeners to your custom buttons
      const nextButton = document.getElementById('customNextButton');
      const prevButton = document.getElementById('customPrevButton');

      if (nextButton) {
        nextButton.addEventListener('click', handleNextButtonClick);
      }

      if (prevButton) {
        prevButton.addEventListener('click', handlePrevButtonClick);
      }

      // Cleanup event listeners on component unmount
      return () => {
        if (nextButton) {
          nextButton.removeEventListener('click', handleNextButtonClick);
        }

        if (prevButton) {
          prevButton.removeEventListener('click', handlePrevButtonClick);
        }
      };
    }
  }, []);
  const [getItems, setItems] = useState([]);
  const APi_URL = "http://192.168.29.47:4000/";
  useEffect(() => {
    const getMoreReason = async () => {
      try {
        const response = await axios.get(
          `${APi_URL}admin/products/getBannerImages`
        );
        console.log(response);
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMoreReason();
  }, []);

  return (
    <div className="bottom-Banner">
      <p className="slider-topTitle">In Focus</p>
      <Swiper ref={swiperRef} navigation={false} className="mySwiper">
        {getItems.map((item) => (
          <SwiperSlide>
            <div className="banner-imageTop">
              <img className="banner-images" src={item.image} alt="no-imge" />
            </div>
            <button className="shop-btn">Shop Now</button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button id="customPrevButton">
        <i class="fas fa-angle-left"></i>
      </button>
      <button id="customNextButton">
        <i class="fas fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Slider;
