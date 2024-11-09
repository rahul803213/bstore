import React from 'react'
import Image from 'next/image';
import ShieldIcon from '@mui/icons-material/Shield';
function InfoBanner() {
  return (
    <div className='flex  w-full h-[12vh] mt-2 text-gray-600'>
      <div className="w-1/4 flex flex-col justify-center items-center uppercase ">
        <p className='text-center'> door to door </p>
        <p className='text-center'> delivery </p>
      </div>
      <div className="w-1/4  flex justify-center items-center ">
        <Image src="/mll.png" 
        alt="Banner Image"
          width={70} // Desired width
          height={100} // Desired height
          />
        <span className='text-center border-l-4 border-gray-600'> MEDICAL BOOKS FOR STUDENTS & PROFESSIONALS</span>
      </div>
      
      <div className="w-1/4  flex flex-col justify-center items-center ">
        <span className='w-1/2  text-center'> FOLLOW US </span>
        <span className='w-1/2  text-center font-bold'> @hsbookstore </span>
      </div>
      <div className="w-1/4  flex justify-center items-center ">
        <ShieldIcon className='text-7xl pr-2 border-r-4 border-gray-600'/>
        <span className='text-center ml-2 '> Secure Payment</span>
      </div>
    </div>
  )
}

export default InfoBanner
