import React from 'react';

// Define the props for a single service item
interface ServiceItemProps {
  title: string;
  imgSrc: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, imgSrc }) => {
  return (
    <div className="w-[120px] h-[150px] flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-2 mx-2">
      {/* Image Section */}
      <div className="w-[100px] h-[100px] mb-2">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      {/* Title Section */}
      <div className="flex-grow flex items-center justify-center text-center">
        <p className="text-xs font-semibold text-gray-700">{title}</p>
      </div>
    </div>
  );
};

// Example data for mini services (10 items)
const servicesData = [
  { title: 'Blood Test', imgSrc: '/path/to/image1.jpg' },
  { title: 'X-Ray', imgSrc: '/path/to/image2.jpg' },
  { title: 'ECG', imgSrc: '/path/to/image3.jpg' },
  { title: 'Consultation', imgSrc: '/path/to/image4.jpg' },
  { title: 'Vaccination', imgSrc: '/path/to/image5.jpg' },
  { title: 'Therapy', imgSrc: '/path/to/image6.jpg' },
  { title: 'MRI Scan', imgSrc: '/path/to/image7.jpg' },
  { title: 'Surgery', imgSrc: '/path/to/image8.jpg' },
  { title: 'Physiotherapy', imgSrc: '/path/to/image9.jpg' },
  { title: 'Dental Checkup', imgSrc: '/path/to/image10.jpg' },
];

const ScrollableServices: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* First Scrollable Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Services</h2>
        <div className="overflow-x-auto flex space-x-4 p-4 no-scrollbar">
          {servicesData.map((service, index) => (
            <ServiceItem key={index} title={service.title} imgSrc={service.imgSrc} />
          ))}
        </div>
      </div>

      {/* Second Scrollable Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Services</h2>
        <div className="overflow-x-auto flex space-x-4 p-4 no-scrollbar">
          {servicesData.map((service, index) => (
            <ServiceItem key={index} title={service.title} imgSrc={service.imgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollableServices;
