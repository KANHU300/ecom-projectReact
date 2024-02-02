import React, { useEffect } from "react";
import TextTitle from "../Title/TextTitle";

const MegaDealsBnr = (props) => {
  useEffect(() => {
    console.log("propsprops:", props.productObj);
  });
  return (
    // <div className="MegaDeals-Baners">
    //   <TextTitle text="Mega Deals " className="" />
    //   <div className="row g-2 mb-2">
    //     {props.productObj.slice(0, 2).map((item) => (
    //       <div className="col-6" key={item._id}>
    //         <div className="Mdeal-BnrTop">
    //           <img
    //             className="Megadeal-images"
    //             src={item.dealImageBig}
    //             alt={item.dealTitle}
    //           />
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <div className="row g-2">
    //     {props.productObj.map((item) => (
    //       <div className="col-md-3 col-6" key={item._id}>
    //         <div className="Mdeal-smallCards">
    //           <img
    //             className="mdeal-bottomImage"
    //             src={item.dealImageSmall}
    //             alt={item.dealTitle}
    //           />
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

<div className="mega-deals-top">
<TextTitle text="Mega Deals " className="" />
<div className="row g-2 mb-2">
{props.productObj.slice(0, 2).map((item) => (
  <div className="col-6" key={item._id}>
    <div className="Mdeal-BnrTop">
      <img
        className="mdeal-image"
        src={item.dealImageBig}
        alt={item.dealTitle}
      />
    </div>
  </div>
))}
</div>
<div className="row g-2">
{props.productObj.map((item) => (
  <div className="col-md-3 col-6" key={item._id}>
    <div className="Mdeal-BnrBtm">
      <img
        className="mdeal-bottomImage"
        src={item.dealImageSmall}
        alt={item.dealTitle}
      />
    </div>
  </div>
))}
</div>
</div>
  );
};

export default MegaDealsBnr;
