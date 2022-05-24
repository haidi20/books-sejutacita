import React, {useState} from 'react';

import logo from "public/images/logo.png";
import Image from 'next/image';
import Categories from 'components/Categories';

const Index = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex items-center w-full bg-blue-900
                        justify-center md:justify-start text-2xl
                        border-b-2 border-gray-200 px-5 py-4 
                        md:lg:xl:px-20 md:lg:xl:py-10 md:lg:xl:text-3xl">
          <p className="text-white">sejuta</p>
          <p className="text-yellow-400">cita</p>
        </div>
        <div className="flex justify-between items-center p-5 md:p-16">
          <div className="flex ">
            
          </div>
          <div className="flex md:xl:lg:justify-center">
            <button className="flex border-2 space-x-2 px-4 py-2
                            border-gray-200 rounded-xl 
                              md:px-6 lg:px-6 xl:px-6 md:py-3 lg:py-3 xl:py-3 
                             active:bg-gray-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <p> Filter </p>
            </button>
          </div>
        </div>
        <div className="flex px-5 py-5 w-full ">
          <Categories />
        </div>
        <div>
          content
        </div>
        
      </div>
    </>
  )
}

export default Index;