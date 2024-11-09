import React from 'react';

// Define the props for the component
interface ServiceItemProps {
  title: string;
  imgSrc: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, imgSrc }) => {
  return (
    <div className="w-[200px] h-[240px] flex flex-col items-center bg-gray-100 rounded-lg shadow-lg p-3">
      {/* Image Section */}
      <div className="w-full h-[180px] flex-shrink-0">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      {/* Title Section */}
      <div className="flex-grow flex items-center justify-center text-center mt-2">
        <p className="text-sm font-semibold text-gray-700">{title}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
