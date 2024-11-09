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
    <div className="overflow-x-auto w-full py-4">
      <div className="flex space-x-4 pl-2">
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
