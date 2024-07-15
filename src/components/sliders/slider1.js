/* eslint-disable */

import React from "react";
import one from "../../assets/Slider1/one.png";

function Slider1(props) {
  const nextbutton = props.nextbutton;
  return (
    <div className='min-h-screen md:container mx-auto'>
      <div className='flex flex-wrap bg-blue-200 md:rounded-xl'>
        <div className='lg:w-1/2'>
          <div className='mt-12'>
            <img src={one} alt='Slider1' className='mx-16' />
            <button className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full ml-4 opacity-0'>
              &#8592;
            </button>
            <button
              className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full opacity-0'
              onClick={nextbutton}
            >
              &#8594;
            </button>
          </div>
        </div>
        <div className='w-full lg:w-1/2 md:p-24 p-12'>
          <h1 className='text-2xl text-blue-900 mb-4'>
            Our students have already secured acceptance to all IVY League
            Universities. You could be next
          </h1>
          <form className='max-w-md'>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Your name'
                className='mr-4  w-full p-2 border border-gray-300 px-4 py-2 rounded-3xl'
              />
            </div>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Your email id'
                className='mr-4  w-full p-2 border border-gray-300 px-4 py-2 rounded-3xl'
              />
            </div>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Your mobile number'
                className='mr-4  w-full p-2 border border-gray-300 px-4 py-2 rounded-3xl'
              />
            </div>
            <div className='mb-4'>
              <textarea
                rows={5}
                placeholder='How can we help?'
                className='mr-4  w-full p-2 border border-gray-300 px-4 py-2 rounded-3xl gap-1 '
              ></textarea>
            </div>
            <div className='mb-4'>
              <button className='mr-4  text-white font-bold w-full bg-blue-800 px-4 py-2 rounded-3xl text-center'>
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Slider1;
