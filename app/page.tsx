// app/page.tsx
import React from 'react';
import Banner from '@/Components/Banner/Banner';
import ExploreMedicalBooks from '@/Pages/ExploreMedicalBooks/ExploreMedicalBooks';
import BestSellers from '@/Pages/BestSellers/BestSellers';
const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
       <Banner title='neuroanatomy books' subTitle='a pioneering interactive approach to the teaching of neuroanatomy' buttonText='shop now' imgurl='./image.jpeg' />
     <ExploreMedicalBooks />
     <BestSellers />
    </div>
  );
};

export default HomePage;
