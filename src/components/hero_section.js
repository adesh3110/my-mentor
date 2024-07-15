import React from "react";
import hero from "../assets/hero-image.png";

function HeroSection() {
  return (
    <div
      className='font-poppins'
      style={{
        backgroundColor: "#f3e1e2",
      }}
    >
      <div className='md:container mx-auto py-4 md:py-12'>
        <div className='flex flex-wrap'>
          <div className='lg:w-1/2 w-full mt-4'>
            <img src={hero} alt='Hero Image' className='px-4 md:px-8' />
          </div>
          <div className='lg:w-1/2 w-full mt-4'>
            <div className='px-4 md:px-8  md:mt-0'>
              <h1 className=' text-3xl font-bold mb-4'>
                Are you ready to be part of a Top Global University?
              </h1>
              <p>
                My Mentor has successfully got students accepted across top IVY
                League Colleges, Russel Group Institutions, Group 8 Institutions
                and other prestigious universities across the globe .
                <br />
                <br />
                If you have a study abroad dream, we can make it happen.
              </p>
              <br />
              <p className='text-lg font-bold text-red-700'>
                Book a free consultation today!
              </p>
              <p>Are you a student or guardian?</p>
              <br />
              <div className='flex items-center space-x-2 '>
                <label className='bg-white px-4 rounded-xl'>
                  <input
                    type='radio'
                    name='role'
                    className='form-radio py-auto checked:bg-red-200'
                  />
                  <span className='px-1'>Student</span>
                </label>
                <label className='bg-white px-4 rounded-xl'>
                  <input
                    type='radio'
                    name='role'
                    className='form-radio py-auto'
                  />
                  <span className='px-1'>Guardian</span>
                </label>
              </div>
            </div>
            <div className="px-4 md:px-8 mt-8 md:mt-0'">
              <form className='w-full'>
                <div className='flex flex-wrap'>
                  <div className='md:w-1/2 w-full mb-4 pr-4'>
                    <input
                      type='text'
                      placeholder='Your first name'
                      className='mr-4  w-full p-2 border border-gray-300 rounded-3xl'
                    />
                  </div>
                  <div className='md:w-1/2 w-full mb-4 pr-4'>
                    <input
                      type='text'
                      placeholder='Your last name'
                      className='  w-full p-2 border border-gray-300 rounded-3xl'
                    />
                  </div>

                  <div className='md:w-1/2 w-full mb-4 pr-4'>
                    <input
                      type='text'
                      placeholder='Your Mobile No.'
                      className='  w-full p-2 border border-gray-300 rounded-3xl'
                    />
                  </div>
                  <div className='md:w-1/2 w-full mb-4 pr-4'>
                    <input
                      type='text'
                      placeholder='Your Email id'
                      className='  w-full p-2 border border-gray-300 rounded-3xl'
                    />
                  </div>
                  <div className='md:w-1/2 w-full mb-4 pr-4'>
                    <button
                      type='submit'
                      placeholder='Your Email id'
                      className='w-full bg-red-600 p-2 border border-gray-300 rounded-3xl'
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
