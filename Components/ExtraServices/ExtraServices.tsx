import React from 'react';
import ExtraServicesItem from '../ExtraServicesItem/ExtraServicesItem';
// Example data for extra services
const extraServicesData = [
  { title: 'Advanced SEO', imgSrc: '/path/to/image1.jpg' },
  { title: 'AI Consulting', imgSrc: '/path/to/image2.jpg' },
  { title: 'Blockchain Development', imgSrc: '/path/to/image3.jpg' },
  { title: 'Cybersecurity', imgSrc: '/path/to/image4.jpg' },
  { title: 'Data Analysis', imgSrc: '/path/to/image5.jpg' },
  { title: 'Cloud Solutions', imgSrc: '/path/to/image6.jpg' },
];

const ExtraServices: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-4 gap-4">
      {extraServicesData.map((service, index) => (
        <ExtraServicesItem key={index} title={service.title} imgSrc={service.imgSrc} />
      ))}
    </div>
  );
};

export default ExtraServices;
