import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'

// Define the props interface 
interface BannerProps { 
  title: string; 
  subTitle: string;
  buttonText: string;
  imgurl: string; 
}

const Banner: React.FC<BannerProps> = ({title, subTitle, buttonText, imgurl}) => {

  return (
    <section className='w-full h-fit md:h-[421px] p-2 flex flex-col gap-2 md:flex-row bg-blue-50 '>
      <div className='flex-1 uppercase flex flex-col justify-center items-center px-7 md:px-10 gap-3 max-md:py-5 '>
        <p className='text-gray-500 text-sm xl:text-lg  '>{title}</p>
        <p className='font-semibold text-lg md:text-2xl xl:text-3xl text-center leading-5'>{subTitle}</p>
        <Button text={buttonText} />
      </div>
      <div className='flex-1 flex items-center'>
        {/* <img src={imgurl} alt='bannerImage' className='object-cover' /> */}
        <Image 
          src="/Image.jpeg"
          alt="bannerImage"
          width={600} // Desired width
          height={400} // Desired height
          loading='lazy'
          quality={100}
          className='object-contain mix-blend-multiply'
        />
      </div>
    </section>
  )
}

export default Banner
