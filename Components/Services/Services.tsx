import React from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
// Example data for services
const servicesData = [
  { title: 'Web Development', imgSrc: '/path/to/image1.jpg' },
  { title: 'App Development', imgSrc: '/path/to/image2.jpg' },
  { title: 'UI/UX Design', imgSrc: '/path/to/image3.jpg' },
  { title: 'SEO Optimization', imgSrc: '/path/to/image4.jpg' },
  { title: 'Digital Marketing', imgSrc: '/path/to/image5.jpg' },
  { title: 'Content Creation', imgSrc: '/path/to/image6.jpg' },
];

const Services: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-4">
      {servicesData.map((service, index) => (
        <ServiceItem key={index} title={service.title} imgSrc={service.imgSrc} />
      ))}
    </div>
  );
};

export default Services;
