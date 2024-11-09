import React from 'react'
import ServiceItem from '../MedicalBooksItem/MedicalBooksItem'
import Item from '../Items/Item'
function MedicalBooks() {
  return (
    <div className='h-70vh w-full flex flex-col mt-5'>
        <span className='my-2 text-center'>Explore Medical Books</span>
       <div className='flex flex-wrap '> 

       <Item
        imgSrc="/path/to/image.jpg"
        description="Stylish Chair"
        oldPrice="$120.00"
        realPrice="$85.00"
        rating={4}
      />
      <Item
        imgSrc="/path/to/image2.jpg"
        description="Modern Lamp"
        oldPrice="$45.00"
        realPrice="$30.00"
        rating={5}
      />
        <Item
        imgSrc="/path/to/image.jpg"
        description="Stylish Chair"
        oldPrice="$120.00"
        realPrice="$85.00"
        rating={4}
      />
      <Item
        imgSrc="/path/to/image2.jpg"
        description="Modern Lamp"
        oldPrice="$45.00"
        realPrice="$30.00"
        rating={5}
      />

       </div>
    </div>
  )
}

export default MedicalBooks
