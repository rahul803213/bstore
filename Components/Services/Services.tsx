import React from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
// Example data for services with medical book images
const servicesData = [
  { title: 'Neuroanatomy Essentials', imgSrc: '/1.png' },
  { title: 'Medical Physiology', imgSrc: '/2.png' },
  { title: 'Surgical Techniques', imgSrc: '/3.png' },
  { title: 'Pharmacology Handbook', imgSrc: '/4.png' },
  { title: 'Pathology Overview', imgSrc: '/5.png' },
];

const Services: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2 p-2">
      {servicesData.map((service, index) => (
        <ServiceItem key={index} title={service.title} imgSrc={service.imgSrc} />
      ))}
    </div>
  );
};

export default Services;
