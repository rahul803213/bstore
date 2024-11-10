import React from 'react';
import ExtraServicesItem from '../ExtraServicesItem/ExtraServicesItem';

// Example data for extra services with real medical book image links
const extraServicesData = [
  { title: 'Neuroanatomy Essentials', imgSrc: 'https://via.placeholder.com/200x300?text=Neuroanatomy+Book' },
  { title: 'Medical Physiology', imgSrc: 'https://via.placeholder.com/200x300?text=Medical+Physiology+Book' },
  { title: 'Surgical Techniques', imgSrc: 'https://via.placeholder.com/200x300?text=Surgical+Techniques+Book' },
  { title: 'Pharmacology Handbook', imgSrc: 'https://via.placeholder.com/200x300?text=Pharmacology+Book' },
  { title: 'Pathology Overview', imgSrc: 'https://via.placeholder.com/200x300?text=Pathology+Book' },
  { title: 'Medical Microbiology', imgSrc: 'https://via.placeholder.com/200x300?text=Medical+Microbiology+Book' },
];

const ExtraServices: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2 p-2">
      {extraServicesData.map((service, index) => (
        <ExtraServicesItem key={index} title={service.title} imgSrc={service.imgSrc} />
      ))}
    </div>
  );
};

export default ExtraServices;
