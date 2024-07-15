/* eslint-disable */

import React, { useState } from "react";
import logo from "../assets/logo.png"; // Import icons for mobile menu
import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  const [borderdiv, setBorderdiv] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-white py-4 px-4 lg:px-16'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='mx-8 mb-4'>
            <img src={logo} alt='LOGO' className='h-12' />
          </div>
          <div className='hidden lg:flex mt-2 space-x-8 mb-2'>
            {/* Our Service */}
            <div className='group mx-4'>
              <div
                className='cursor-pointer  hover:text-red-700   transition duration-300 mb-6 '
                onMouseEnter={() => {
                  setBorderdiv(true);
                }}
                onMouseLeave={() => {
                  setBorderdiv(false);
                }}
              >
                OUR SERVICES
              </div>
              <div
                className='absolute hidden group-hover:block transition duration-300 ease-in-out shadow-md left-0 right-0  '
                onMouseEnter={() => {
                  setBorderdiv(true);
                }}
                onMouseLeave={() => {
                  setBorderdiv(false);
                }}
              >
                <div
                  className='w-full bg-white py-8'
                  style={borderdiv ? { borderTop: "2px solid #EED9DB" } : {}}
                >
                  <ul className='flex container gap-8 '>
                    <li className='cursor-pointer border-b border-gray-500 mr-10 py-2 hover:text-red-700'>
                      All Services
                    </li>
                    <li className='cursor-pointer border-b border-gray-500 mr-10 py-2 hover:text-red-700'>
                      Career Counseling
                    </li>
                    <li className='cursor-pointer border-b border-gray-500 mr-10 py-2 hover:text-red-700'>
                      Study Abroad
                    </li>
                    <li className='cursor-pointer border-b border-gray-500 mr-10 py-2 hover:text-red-700'>
                      Test Preparation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='group mx-4'>
              <div
                className='cursor-pointer  hover:text-red-700   transition duration-300 mb-6 '
                onMouseEnter={() => {
                  setBorderdiv(true);
                }}
                onMouseLeave={() => {
                  setBorderdiv(false);
                }}
              >
                About Us
              </div>
              <div
                className='absolute hidden group-hover:block transition duration-300 ease-in-out shadow-md left-0 right-0  '
                onMouseEnter={() => {
                  setBorderdiv(true);
                }}
                onMouseLeave={() => {
                  setBorderdiv(false);
                }}
              >
                <div
                  className='w-full bg-white py-8'
                  style={borderdiv ? { borderTop: "2px solid #EED9DB" } : {}}
                >
                  <ul className='flex container gap-8 '>
                    <li className='cursor-pointer border-b border-gray-500 mr-10 py-2 hover:text-red-700'>
                      Sucess Stories
                    </li>
                    <li className='cursor-pointer border-b border-gray-500 mr-10 py-2 hover:text-red-700'>
                      My Mentor Process
                    </li>
                    <li className='cursor-pointer border-b border-gray-500 mr-10 py-2 hover:text-red-700'>
                      Interaction
                    </li>
                    <li className='cursor-pointer border-b border-gray-500 mr-10 py-2 hover:text-red-700'>
                      Our Philosphy
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='mx-4 cursor-pointer hover:text-red-700'>
              OUR BLOG
            </div>

            <div className='mx-4 cursor-pointer hover:text-red-700'>
              CAREERS@MYMENTOR
            </div>
          </div>
        </div>
        <div className='py-2 hidden lg:flex'>
          <div className='mx-8'>PHONE</div>
          <div className='mx-8'>
            <button className='bg-red-700 rounded-xl px-4 py-1 text-white'>
              ENQUIRY
            </button>
          </div>
        </div>
        <div className='lg:hidden'>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <MinusIcon className='h-8 w-8 text-gray-700' />
            ) : (
              <PlusIcon className='h-8 w-8 text-gray-700' />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className='lg:hidden mt-4'>
          <div className='space-y-4'>
            <div className='cursor-pointer hover:text-red-700 transition duration-300'>
              OUR SERVICES
            </div>
            <div className='cursor-pointer hover:text-red-700 transition duration-300'>
              About Us
            </div>
            <div className='cursor-pointer hover:text-red-700'>OUR BLOG</div>
            <div className='cursor-pointer hover:text-red-700'>
              CAREERS@MYMENTOR
            </div>
            <div className='mt-4'>
              <button className='bg-red-700 rounded-xl px-4 py-1 text-white'>
                ENQUIRY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
