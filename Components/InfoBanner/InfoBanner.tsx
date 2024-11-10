import React from 'react'
import Image from 'next/image';
import ShieldIcon from '@mui/icons-material/Shield';
function InfoBanner() {
  return (
    <div className='flex justify-center w-full h-[8vh] sm:h-[12vh] text-gray-600 font-semibold text-[6px] sm:text-xs sm:my-2 bg-stone-100 uppercase '>
      <div className="w-3/12 flex flex-col justify-center items-center  border-r border-gray-500">
        <p className='text-center'> door to door </p>
        <p className='text-center'> delivery </p>
      </div>
      <div className="w-4/12 flex justify-center items-center h-full gap-1 border-r border-gray-500">
        <Image 
          src="/mll.png" 
          alt="Banner Image"
          width={30} // Desired width
          height={40} // Desired height
          className='mix-blend-multiply sm:w-[40px] sm:h-[50px]'
          />
        <p className='w-3/5 text-center '> MEDICAL BOOKS FOR STUDENTS & PROFESSIONALS</p>
      </div>
      
      <div className="w-2/12  flex flex-col justify-center items-center border-r border-gray-500">
        <p className='text-center'> Follow us </p>
        <p className='text-center font-bold lowercase'> @hsbookstore </p>
      </div>
      <div className="w-3/12  flex justify-center items-center gap-2 ">
        <ShieldIcon className='text-xl sm:text-3xl '/>
        <p className=''> Secure Payment</p>
      </div>
    </div>
  )
}

export default InfoBanner
