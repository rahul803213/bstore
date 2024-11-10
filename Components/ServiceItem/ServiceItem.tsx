import React from 'react';

// Define the props for the component
interface ServiceItemProps {
  title: string;
  imgSrc: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, imgSrc }) => {
  return (
    <div className="w-full h-[240px] flex flex-col items-center rounded-lg p-2 gap-2">
      {/* Image Section */}
      <div className="flex-1">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full rounded-lg object-cover"
          loading='lazy'
        />
      </div>

      {/* Title Section */}
      <div className="h-10 flex items-center justify-center">
        <p className="text-xs md:text-sm font-semibold text-gray-700">{title}</p>
      </div>
      
    </div>
  );
};

export default ServiceItem;
