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
    <div className="w-[120px] sm:w-[180px] h-[320px] sm:h-[370px] flex flex-col gap-1 rounded-lg px-3 py-2 bg-white shadow-lg">
      {/* Image Section */}
      <div className="w-full h-[150px] sm:h-[200px] relative flex-shrink-0">
        <img
          src={imgSrc}   
          alt={description}
          className="w-full h-full rounded-lg object-cover"
        />
        {/* Add Button */}
        <button className="absolute left-0 bottom-0 translate-y-3 py-1 px-3 bg-blue-500 text-white text-xs font-semibold rounded-full shadow">
          +Add
        </button>
      </div>

      {/* Description Section */}
      <p className="w-full h-[40px] sm:h-[50px] mt-2 text-gray-800 text-xs sm:text-sm font-medium line-clamp-2 overflow-hidden">
        {description}
      </p>

      {/* Price Section */}
      <div className="w-full h-[25px] flex items-center space-x-2 text-xs sm:text-sm">
        <span className="text-green-600 font-semibold text-lg">{realPrice}</span>
        <span className="text-gray-400 line-through">{oldPrice}</span>
      </div>

      {/* Rating Section */}
      <div className="w-full h-[20px] flex items-center text-yellow-500">
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
