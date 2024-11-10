import React from 'react';
import Item from '../Items/Item';
import { LeftDirection, RightDirection } from '@/assets/muIcons';

// Sample data for items
const itemsData = Array.from({ length: 10 }, (_, i) => ({
  imgSrc: `https://th.bing.com/th/id/OIP.wxSs26DdLqWNWtZQDLwPmgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7`,
  description: `Item ${i + 1}`,
  oldPrice: `$${(i + 1) * 10}`,
  realPrice: `$${(i + 1) * 8}`,
  rating: Math.floor(Math.random() * 5) + 1,
}));

const Menu: React.FC = () => {
  return (
    <div className="w-full py-2 relative">
      <div>
        <span className='font-semibold'>Recently Added</span> 
        &nbsp; 
        <a href='#' className='text-blue-500 underline'>see all</a>
      </div>
      
      <div className='w-full mt-2 overflow-x-auto no-scrollbar px-2'>
        <div className="w-fit flex ">
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

        <div className='w-10 h-10 top-[50%] -left-5 -translate-y-1/2 absolute border border-stone-600 backdrop-blur-sm z-10 rounded-full items-center justify-center text-lg text-stone-800 hidden md:flex'>
          <LeftDirection />
        </div>
        <div className='w-10 h-10 top-[50%] -right-5 -translate-y-1/2 absolute border border-stone-600 backdrop-blur-sm z-10 rounded-full items-center justify-center text-lg text-stone-800 hidden md:flex'>
          <RightDirection />
        </div>
      </div>
    </div>
  );
};

export default Menu;
