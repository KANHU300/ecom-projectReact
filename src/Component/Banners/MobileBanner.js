import React from "react";

const MobileBanner = (props) => {
  return (
    // <div className="MobileBanners-top">
    <div className="MobileBanners-top">
      <div className="banner-text">
       
        <p className="text-edit">{props.name}</p>
      </div>
      <div className="bannerImgg-top">
      <img
        src={props.image}
        alt="..."
        className="banner-insideImge"
      /></div>
    </div>
    // </div>
  );
};

export default MobileBanner;
