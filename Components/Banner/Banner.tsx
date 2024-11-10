import React from 'react'
// import Button from './Button';
import "./Banner.scss"
 // Define the props interface 
interface BannerProps { 
  title: string; 
  subTitle: string;
  buttonText: string;
  imgurl: string; 
}

const Banner: React.FC<BannerProps> = ({title, subTitle, buttonText, imgurl}) => {

  return (
    <section className='w-full h-[619px] sm:h-[421px] p-2 flex flex-col gap-2 sm:flex-row'>
      <div className='flex-1 uppercase flex flex-col justify-center items-center px-10 gap-3'>
        <p className='text-gray-700  sm:text-2xl '>{title}</p>
        <p className='font-semibold text-lg sm:text-4xl text-center'>{subTitle}</p>
        {/* <Button text={buttonText} /> */}
        <button className="btn btn--green ">{buttonText}</button>
      </div>
      <div className='flex-1'>
        <img src={imgurl} alt='bannerImage' className='object-cover' />
      </div>
    </section>
  )
}

export default Banner
