// app/page.tsx
import React from 'react';
import Banner from '@/Components/Banner/Banner';
import InfoBanner from '@/Components/InfoBanner/InfoBanner';
import MedicalBooks from '@/Components/MedicalBooks.tsx/MedicalBooks';
import Services from '@/Components/Services/Services';
import Menu from '@/Components/Menu/Menu';
import ExtraServices from '@/Components/ExtraServices/ExtraServices';
import ScrollableServices from '@/Components/ScrollableItems/ScrollableItems';
const HomePage = () => {
  return (
    <div className='flex flex-col justify-center gap-2 w-[80%]'>
      <InfoBanner />
       <Banner title='neuroanatomy books' subTitle='a pioneering interactive approach to the teaching of neuroanatomy' buttonText='shop now' imgurl='./image.jpeg' />
     <Services />
     <Menu />
     <ExtraServices />
     <ScrollableServices />
     </div>
  );
};

export default HomePage;
