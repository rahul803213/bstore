import React from 'react';
import Item from '../Items/Item';

function MedicalBooks() {
  return (
    <div className='h-70vh w-full flex flex-col mt-5'>
        <span className='my-2 text-center text-2xl font-bold'>Explore Medical Books</span>
        <div className='flex flex-wrap gap-4 justify-center'> 

          {/* Replace with actual book data */}
          <Item
            imgSrc="/1.png"
            description="Neuroanatomy Essentials"
            oldPrice="$120.00"
            realPrice="$85.00"
            rating={4}
          />
          <Item
            imgSrc="https://via.placeholder.com/150x200?text=Medical+Physiology"
            description="Medical Physiology"
            oldPrice="$45.00"
            realPrice="$30.00"
            rating={5}
          />
          <Item
            imgSrc="https://via.placeholder.com/150x200?text=Surgical+Techniques"
            description="Surgical Techniques"
            oldPrice="$80.00"
            realPrice="$60.00"
            rating={4}
          />
          <Item
            imgSrc="https://via.placeholder.com/150x200?text=Pharmacology+Handbook"
            description="Pharmacology Handbook"
            oldPrice="$90.00"
            realPrice="$70.00"
            rating={5}
          />

        </div>
    </div>
  );
}

export default MedicalBooks;
