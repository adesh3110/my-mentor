/* eslint-disable */
import React from "react";
import first from "../assets/Service/first.png";
import second from "../assets/Service/second.png";
import third from "../assets/Service/third.png";

function ServicesCarousel() {
  return (
    <div className='md:container mx-auto md:mt-12'>
      <div
        className='p-8 pb-0 md:rounded-xl z-0'
        style={{
          marginBottom: "200px",
          paddingBottom: "15%",
          backgroundColor: "#EED9DB",
          position: "relative",
        }}
      >
        <div className='text-center my-4'>
          <h1 className='text-bold text-4xl mb-4'>Services</h1>
          <p>Everything you need to make it into your dream university.</p>
        </div>

        <div
          style={{
            zIndex: 30,
            position: "absolute",
            left: "20%",
            right: "20%",
          }}
        >
          <img src={first} alt='Image' style={{ width: "100vh" }} />
        </div>

        {/* Add the black background area */}
        <div
          className='hidden lg:block'
          style={{
            zIndex: 20,
            position: "absolute",
            top: "50%",
            left: "28%",
            right: "40%",
            transform: "translate(-50%, 40%)",
          }}
        >
          <div className='relative'>
            <img src={second} alt='Image' style={{ width: "50vh" }} />
            <div className='absolute inset-0 bg-black rounded-xl opacity-60'></div>
          </div>
        </div>
        <div
          className='hidden lg:block'
          style={{
            zIndex: 20,
            position: "absolute",
            top: "50%",
            right: "28%",
            left: "40%",
            transform: "translate(50%, 40%)",
          }}
        >
          <div className='relative'>
            <img src={third} alt='Image' style={{ width: "50vh" }} />
            <div className='absolute inset-0 bg-black rounded-xl opacity-60'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCarousel;
