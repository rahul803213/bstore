import React from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
// Example data for services
const servicesData = [
  { title: 'Web Development', imgSrc: 'https://th.bing.com/th/id/OIP.wxSs26DdLqWNWtZQDLwPmgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
  { title: 'App Development', imgSrc: 'https://th.bing.com/th/id/OIP.wxSs26DdLqWNWtZQDLwPmgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
  { title: 'UI/UX Design', imgSrc: 'https://th.bing.com/th/id/OIP.wxSs26DdLqWNWtZQDLwPmgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
  { title: 'SEO Optimization', imgSrc: 'https://th.bing.com/th/id/OIP.wxSs26DdLqWNWtZQDLwPmgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
  { title: 'Digital Marketing', imgSrc: 'https://th.bing.com/th/id/OIP.wxSs26DdLqWNWtZQDLwPmgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
];

const Services: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2 p-2 ">
      {servicesData.map((service, index) => (
        <ServiceItem key={index} title={service.title} imgSrc={service.imgSrc} />
      ))}
    </div>
  );
};

export default Services;
