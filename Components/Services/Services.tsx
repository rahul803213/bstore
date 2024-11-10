import React from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
// Example data for services with medical book images
const servicesData = [
  { title: 'Neuroanatomy Essentials', imgSrc: 'https://via.placeholder.com/200x300?text=Neuroanatomy+Essentials' },
  { title: 'Medical Physiology', imgSrc: 'https://via.placeholder.com/200x300?text=Medical+Physiology' },
  { title: 'Surgical Techniques', imgSrc: 'https://via.placeholder.com/200x300?text=Surgical+Techniques' },
  { title: 'Pharmacology Handbook', imgSrc: 'https://via.placeholder.com/200x300?text=Pharmacology+Handbook' },
  { title: 'Pathology Overview', imgSrc: 'https://via.placeholder.com/200x300?text=Pathology+Overview' },
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
