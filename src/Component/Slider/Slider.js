import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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
      document.getElementById('customNextButton').addEventListener('click', handleNextButtonClick);
      document.getElementById('customPrevButton').addEventListener('click', handlePrevButtonClick);

      // Cleanup event listeners on component unmount
      return () => {
        document.getElementById('customNextButton').removeEventListener('click', handleNextButtonClick);
        document.getElementById('customPrevButton').removeEventListener('click', handlePrevButtonClick);
      };
    }
  }, []);

  return (
    <div className="bottom-Banner">
      <p className="slider-topTitle">In Focus</p>
      <Swiper ref={swiperRef} navigation={false} className="mySwiper">
        <SwiperSlide>
          <div className="banner-imageTop">
            <img
              className="banner-images"
              src="/images/LandingPg/iphoneBanner.png"
              alt="no-imge"
            />
          </div>
          <button className='shop-btn'>Shop Now</button>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-imageTop">
            <img
              className="banner-images"
              src="/images/LandingPg/banner1.png"
              alt="no-imge"
            />
          </div>
          <button className='shop-btn'>Shop Now</button>
        </SwiperSlide>
      </Swiper>
      
      {/* Custom Navigation Buttons */}
      <button id="customPrevButton"><i class="fas fa-angle-left"></i></button>
      <button id="customNextButton"><i class="fas fa-angle-right"></i></button>
    </div>
  );
};

export default Slider;
