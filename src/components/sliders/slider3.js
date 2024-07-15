import React from "react";
import one from "../../assets/Slider1/three.png";

function Slider1() {
  return (
    <div className='min-h-screen md:container'>
      <div className='flex flex-wrap bg-blue-200 md:rounded-xl'>
        <div className='lg:w-full relative'>
          <div className=''>
            <img src={one} alt='Slider1' className='w-full' />
            <button className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full ml-4 opacity-0'>
              &#8592;
            </button>
            <button className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full opacity-0'>
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider1;
