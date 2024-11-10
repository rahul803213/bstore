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
    <div className="w-[120px] sm:w-[180px] h-[250px] sm:h-[320px] flex flex-col gap-1 rounded-lg px-3 py-2">
      {/* Image Section */}
      <div className="w-full h-[150px] sm:h-[200px] relative ">
        <img
          src={imgSrc}   
          alt={description}
          className="w-full h-full rounded-lg object-cover"
        />
        {/* Add Button */}
        <button className="absolute left-0 bottom-0 translate-y-3  py-1 px-3 bg-blue-500 text-white text-xs font-semibold rounded-sm shadow">
          +Add
        </button>
      </div>

      {/* Description Section */}
      <p className="w-full h-[39px] mt-2 text-gray-800 text-xs sm:text-sm font-medium ">
        {description}
      </p>

      {/* Price Section */}
      <div className="w-full space-x-2 text-xs sm:text-sm">
        <span className="text-gray-400 line-through ">{oldPrice}</span>
        <span className="text-green-600 font-semibold ">{realPrice}</span>
      </div>

      {/* Rating Section */}
      <div className="w-full flex text-yellow-500">
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
