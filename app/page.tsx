"use client";
import React from 'react';
import Banner from '@/Components/Banner/Banner';
import InfoBanner from '@/Components/InfoBanner/InfoBanner';
import Services from '@/Components/Services/Services';
import Menu from '@/Components/Menu/Menu';
import ExtraServices from '@/Components/ExtraServices/ExtraServices';
import ScrollableServices from '@/Components/ScrollableItems/ScrollableItems';
const HomePage: React.FC = () => {
 

  

  return (
    <div className='flex flex-col justify-center items-center gap-2 w-full sm:w-[80%] xl:w-[1024px]'>
      <InfoBanner />
      <Banner
        title='neuroanatomy books'
        subTitle='a pioneering interactive approach to the teaching of neuroanatomy'
        buttonText='shop now'
        imgurl='/image.jpeg'
      />
      
      <Services />
      <Menu />
      <ExtraServices />
      <ScrollableServices /> 
     
    </div>
  );
};

export default HomePage;
