import React from 'react';

// Define the props for the component
interface ItemProps {
  imgSrc: string;
  description: string;
  oldPrice: string;
  realPrice: string;
  rating: number;
}

const Item: React.FC<ItemProps> = ({ imgSrc, description, oldPrice, realPrice, rating }) => {
  return (
    <div className="w-[120px] sm:w-[180px] h-[250px] sm:h-[320px] flex flex-col gap-2 bg-white rounded-lg shadow-lg p-2 border border-gray-200">
      {/* Image Section */}
      <div className="w-[120px] h-[150px] relative">
        <img
          src={imgSrc}
          alt={description}
          className="w-full h-full rounded-lg object-cover"
        />
        {/* Add Button */}
        <button className="absolute left-2 bottom-2 w-[40px] h-[10px] bg-blue-500 text-white text-xs font-semibold rounded-lg shadow">
          +Add
        </button>
      </div>

      {/* Description Section */}
      <div className="w-full h-[39px] flex items-center justify-center mt-2 text-center text-gray-800 text-sm font-medium">
        {description}
      </div>

      {/* Price Section */}
      <div className="w-full h-[13px] flex justify-center items-center mt-1 space-x-2">
        <span className="text-gray-400 line-through text-xs">{oldPrice}</span>
        <span className="text-green-600 font-semibold text-xs">{realPrice}</span>
      </div>

      {/* Rating Section */}
      <div className="w-full h-[8px] flex items-center justify-center mt-1 text-yellow-500">
        {/* Render stars based on the rating */}
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Item;
