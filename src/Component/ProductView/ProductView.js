
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";

const ProductView = () => {
  return (
    <div className="about-item">
      <div className="row">
        <div className="col-md-5">
          <div className="about-item-image">
            <img
              src="/images/LandingPg/banner1.png"
              alt=""
              className="top-image-item"
            />
          </div>
          <div className="about-ietm-carosual">
            <Swiper  className="mySwiper"navigation={true} modules={[Navigation]}  slidesPerView={3}  spaceBetween={20}>
              <SwiperSlide><div className="imageSlide-top"><img className="imagesBottm"  src="/images/LandingPg/lptp1.png"alt=".."/></div></SwiperSlide>
              <SwiperSlide><div className="imageSlide-top"><img   className="imagesBottm" src="/images/LandingPg/lptop2.png"alt=".."/></div></SwiperSlide>
              <SwiperSlide><div className="imageSlide-top"><img   className="imagesBottm" src="/images/LandingPg/lptp1.png"alt=".."/></div></SwiperSlide>
              <SwiperSlide><div className="imageSlide-top"><img   className="imagesBottm" src="/images/LandingPg/lptop2.png"alt=".."/></div></SwiperSlide>
              <SwiperSlide><div className="imageSlide-top"><img  className="imagesBottm"  src="/images/LandingPg/lptp1.png"alt=".."/></div></SwiperSlide>
              <SwiperSlide><div className="imageSlide-top"><img   className="imagesBottm" src="/images/LandingPg/lptop2.png"alt=".."/></div></SwiperSlide>
           
            </Swiper>
          </div>
        </div>
        <div className="col-md-7">
          <div className="about-details">
            <p className="item-para">
              Apple 2022 MacBook Air laptop with M2 chip: 13.6-inch Liquid
              Retina display, 8GB RAM, 256GB SSD storage, 1080p FaceTime HD
              camera. Works with iPhone and iPad; Midnight; English
            </p>
            <div className="cost-details">
              <p className="cost-offer">4,599 AED <span className="cost-confrim">4,199 AED</span></p>
              
            </div>
            <p className="inclusiveline">Inclusive of VAT</p>
            <div className="quantity-details">
              <p className="quantity-para">Quantity</p>
              <div className="quantity-increase">
                <div className="row">
                  <div className="col quantity-plus">
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="col quantity-plus">1</div>
                  <div className="col quantity-plus">
                    <i className="fas fa-minus"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="add-to-cart-buttons">
              <button className="addcartbutton">Add to Cart</button>
              <button className="buyitnowbutton">Buy it Now</button>
            </div>
            <div className="globalpointline">
              <p className="globalpurchase">
                Purchase this product now and earn 4,199 GM Global Points!
              </p>
            </div>
            <div className="rating-stars">
              <p className="write-review">Write Review</p>
            </div>
            <p className="costumer-review">500 Costumer Review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
