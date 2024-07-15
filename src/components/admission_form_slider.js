/* eslint-disable */

import React from "react";
import Slider from "react-slick";
import Slider1 from "./sliders/slider1";
import Slider2 from "./sliders/slider2";
import Slider3 from "./sliders/slider3";
import Slider4 from "./sliders/slider4";
import Slider5 from "./sliders/slider5";
import Slider6 from "./sliders/slider6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AdmissionFormSlider() {
  const settings = {
    dots: true, // Enable dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-red-500`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-red-500`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className='container mx-auto py-8'>
      <Slider {...settings}>
        <div>
          <Slider1 />
        </div>
        <div className='sm:hidden lg:visible'>
          <Slider2 />
        </div>
        <div>
          <Slider3 />
        </div>
        <div>
          <Slider4 />
        </div>
        <div>
          <Slider5 />
        </div>
        <div>
          <Slider6 />
        </div>
      </Slider>
    </div>
  );
}

export default AdmissionFormSlider;
