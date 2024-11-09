// BestSellers.tsx
import React from 'react';
import BestSellerItem from '@/Components/BestSellerItem/BestSellerItem';
const items = [
  {
    imageSrc: '/path/to/image1.jpg',
    title: 'Lean Six Sigma For Leaders: A Practical Guide For Leaders ...',
    price: 'KWD 1.990',
    originalPrice: 'KWD 2.500',
    rating: 4,
  },
  {
    imageSrc: '/path/to/image2.jpg',
    title: 'Gray\'s Surface Anatomy and Ultrasound: A Foundation for Clinical Practice',
    price: 'KWD 1.990',
    originalPrice: 'KWD 2.500',
    rating: 4,
  },
  // Add more items as needed
];

const BestSellers: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Best Sellers</h2>
        <a href="#" className="text-blue-500 hover:underline">see all</a>
      </div>
      
      {/* Horizontal Scrollable Section */}
      <div className="overflow-x-auto">
        <div className="flex space-x-4 min-w-max">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/6"
            >
              <BestSellerItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
