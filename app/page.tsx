"use client";
import React,   from 'react';
import Banner from '@/Components/Banner/Banner';
import InfoBanner from '@/Components/InfoBanner/InfoBanner';
import Services from '@/Components/Services/Services';
import Menu from '@/Components/Menu/Menu';
import ExtraServices from '@/Components/ExtraServices/ExtraServices';
import ScrollableServices from '@/Components/ScrollableItems/ScrollableItems';


const HomePage = () => {
  // Initialize Apollo Client
 

  // Fetch schema data on mount

  return (
    <div className='flex flex-col justify-center gap-2 w-full sm:w-[80%]'>
      <InfoBanner />
      <Banner
        title='neuroanatomy books'
        subTitle='a pioneering interactive approach to the teaching of neuroanatomy'
        buttonText='shop now'
        imgurl='./image.jpeg'
      />
      <Services />
      <Menu />
      <ExtraServices />
      <ScrollableServices />
      <div>
        <h1>GraphQL Schema</h1>
        <p>Check your browser console for the list of types and fields from the GraphQL schema.</p>
      </div>
    </div>
  );
};

export default HomePage;
