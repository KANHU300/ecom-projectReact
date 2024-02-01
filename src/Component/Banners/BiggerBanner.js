import React from 'react'

const BiggerBanner = (props) => {
  return (
    <div className="big-banner">
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
  )
}

export default BiggerBanner