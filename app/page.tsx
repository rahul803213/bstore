// app/page.tsx
import React from 'react';
import Banner from '@/Components/Banner/Banner';
import InfoBanner from '@/Components/InfoBanner/InfoBanner';
import MedicalBooks from '@/Components/MedicalBooks.tsx/MedicalBooks';
const HomePage = () => {
  return (
    <div className='flex flex-col justify-center gap-2 w-[80%]'>
      <InfoBanner />
       <Banner title='neuroanatomy books' subTitle='a pioneering interactive approach to the teaching of neuroanatomy' buttonText='shop now' imgurl='./image.jpeg' />
     <MedicalBooks />
     </div>
  );
};

export default HomePage;
