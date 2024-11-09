// BestSellerItem.tsx
import React from 'react';

interface BestSellerItemProps {
  imageSrc: string;
  title: string;
  price: string;
  originalPrice: string;
  rating: number;
}

const BestSellerItem: React.FC<BestSellerItemProps> = ({ imageSrc, title, price, originalPrice, rating }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-4 text-sm font-semibold text-gray-900">{title}</h3>
      <div className="flex items-center mt-2 space-x-2">
        <span className="text-lg font-bold text-green-600">{price}</span>
        <span className="text-xs line-through text-gray-400">{originalPrice}</span>
      </div>
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
        ))}
      </div>
      <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">+ Add</button>
    </div>
  );
};

export default BestSellerItem;
