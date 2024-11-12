// components/Banner.tsx
import React from 'react';
import Image from 'next/image';
const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center  lg:items-center bg-gray-50 border border-blue-200 p-6 lg:p-12 rounded-lg">
      {/* Left side: Text content */}
      <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-center">
        <h5 className="text-gray-500 uppercase tracking-wide text-xs md:text-sm mb-2">Neuroanatomy Books</h5>
        <h2 className="text-md sm:text-2xl sm:px-10 lg:text-4xl font-bold text-gray-800 mb-4">
          A Pioneering Interactive Approach to the Teaching of Neuroanatomy
        </h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-6 rounded-full mt-4 lg:mt-0">
          Shop Now
        </button>
      </div>

      {/* Right side: Image */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
      <Image 
          src="/image.jpeg" 
          alt="bannerImage"
          width={600} // Desired width
          height={40} // Desired height
          
          className='object-contain h-full w-full'

        />
      </div>
    </div>
  );
};

export default Banner;
