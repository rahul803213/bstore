import React from 'react'
import Image from 'next/image';
import ShieldIcon from '@mui/icons-material/Shield';
function InfoBanner() {
  return (
    <div className='flex justify-center w-full h-[50px] md:h-[60px] xl:h-[80px] text-gray-600 font-semibold text-[6px] md:text-xs sm:my-2 bg-stone-100 uppercase'>
      <div className="w-3/12 h-full flex justify-center items-center border-r border-gray-500">
        <div className='w-fit flex flex-col items-center '>
          <span> door to door </span>
          <span> delivery </span>
        </div>
      </div>
      <div className="w-4/12 h-full flex justify-center items-center gap-1 border-r border-gray-500">
        <Image 
          src="/medical.png" 
          alt="Banner Image"
          width={30} // Desired width
          height={40} // Desired height
          className='mix-blend-multiply md:w-[40px] md:h-[50px]'
        />

        <div className='w-3/5 flex flex-col items-center '>
          <span className=''> MEDICAL BOOKS  </span>
          <span >FOR STUDENTS &</span>
          <span >PROFESSIONALS</span>
        </div>
      </div>
      
      <div className="w-2/12 h-full flex flex-col justify-center items-center border-r border-gray-500">
        <div className='w-fit flex flex-col items-center '>
          <span> Follow us </span>
          <span className='font-bold lowercase'> @hsbookstore </span>
        </div>
      </div>
      <div className="w-3/12 flex justify-center items-center gap-2 ">
        <ShieldIcon className='text-xl md:text-3xl '/>
        <span> Secure Payment</span>
      </div>
    </div>
  )
}

export default InfoBanner
