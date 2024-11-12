import React from 'react';
import ExtraServicesItem from '../ExtraServicesItem/ExtraServicesItem';

// Example data for extra services with real medical book image links
const extraServicesData = [
  { title: 'Neuroanatomy Essentials', imgSrc: '/m1.png' },
  { title: 'Medical Physiology', imgSrc: '/m2.png' },
  { title: 'Surgical Techniques', imgSrc: '/m4.png' },
  { title: 'Pharmacology Handbook', imgSrc: '/m3.png' },
  { title: 'Pathology Overview', imgSrc: '/m5.png' },
  { title: 'Medical Microbiology', imgSrc: '/m6.png' },
];

const ExtraServices: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2 p-2 ">
      {extraServicesData.map((service, index) => (
        <ExtraServicesItem key={index} title={service.title} imgSrc={service.imgSrc} />
      ))}
    </div>
  );
};

export default ExtraServices;
