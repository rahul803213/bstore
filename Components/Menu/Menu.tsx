import React from 'react';
import Item from '../Items/Item';
// Sample data for items
const itemsData = Array.from({ length: 10 }, (_, i) => ({
  imgSrc: `/path/to/image${i + 1}.jpg`,
  description: `Item ${i + 1}`,
  oldPrice: `$${(i + 1) * 10}`,
  realPrice: `$${(i + 1) * 8}`,
  rating: Math.floor(Math.random() * 5) + 1,
}));

const Menu: React.FC = () => {
  return (
    <div className="w-full py-2 border-2 border-green-500 overflow-x-auto">
      <div>
        <span className='font-semibold'>Recently Added</span> 
        &nbsp; 
        <a href='#' className='text-blue-500 underline'>see all</a>
      </div>
      
      <div className="w-fit flex px-2 border-2 border-red-600 mt-2 gap-2">
        {itemsData.map((item, index) => (
          <Item
            key={index}
            imgSrc={item.imgSrc}
            description={item.description}
            oldPrice={item.oldPrice}
            realPrice={item.realPrice}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
