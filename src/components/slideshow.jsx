import React from "react";
import "./slideshow.css";


const HeaderSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    centerMode: true,
    cssEase: "linear",
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="slider-content overflow-x-hidden">
          <div {...settings}>
            <div className="slider-item">
              <img src='https://hc.com.vn/i/ecommerce/media/GS.009873_FEATURE_122334.jpg' alt="" />
            </div>
            <div className="slider-item">
            <img src='https://hc.com.vn/i/ecommerce/media/GS.009873_FEATURE_122334.jpg' alt="" />

            </div>
            <div className="slider-item">
            <img src='https://hc.com.vn/i/ecommerce/media/GS.009873_FEATURE_122334.jpg' alt="" />

            </div>
            <div className="slider-item">
            <img src='https://hc.com.vn/i/ecommerce/media/GS.009873_FEATURE_122334.jpg' alt="" />

            </div>
           
         </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;