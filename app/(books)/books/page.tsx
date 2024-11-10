import React from 'react';
import BookItem from '@/Components/BookItem/BookItem';
import InfoBanner from '@/Components/InfoBanner/InfoBanner';
import Banner from '@/Components/Banner/Banner';
import Item from '@/Components/Items/Item';

// BookList component to iterate and display the books
const BookList: React.FC = () => {
  interface Book {
    id: number;
    imgSrc: string;
    description: string;
    oldPrice: string;
    realPrice: string;
    rating: number;
  }
  
  const dummyBestsellers: Book[] = [
    { id: 1, imgSrc: 'https://via.placeholder.com/120x150', description: 'Book 1', oldPrice: '$25.99', realPrice: '$19.99', rating: 4 },
    { id: 2, imgSrc: 'https://via.placeholder.com/120x150', description: 'Book 2', oldPrice: '$29.99', realPrice: '$24.99', rating: 5 },
    { id: 3, imgSrc: 'https://via.placeholder.com/120x150', description: 'Book 3', oldPrice: '$20.99', realPrice: '$15.99', rating: 3 },
    { id: 4, imgSrc: 'https://via.placeholder.com/120x150', description: 'Book 4', oldPrice: '$35.99', realPrice: '$30.99', rating: 4 },
    { id: 5, imgSrc: 'https://via.placeholder.com/120x150', description: 'Book 5', oldPrice: '$40.99', realPrice: '$35.99', rating: 5 },
    { id: 6, imgSrc: 'https://via.placeholder.com/120x150', description: 'Book 6', oldPrice: '$28.99', realPrice: '$23.99', rating: 4 },
    { id: 7, imgSrc: 'https://via.placeholder.com/120x150', description: 'Book 7', oldPrice: '$22.99', realPrice: '$18.99', rating: 4 },
    { id: 8, imgSrc: 'https://via.placeholder.com/120x150', description: 'Book 8', oldPrice: '$26.99', realPrice: '$21.99', rating: 3 },
    { id: 9, imgSrc: 'https://via.placeholder.com/120x150', description: 'Book 9', oldPrice: '$19.99', realPrice: '$14.99', rating: 5 },
    { id: 10, imgSrc: 'https://via.placeholder.com/120x150', description: 'Book 10', oldPrice: '$30.99', realPrice: '$27.99', rating: 5 },
  ];
  
  const dummyBooks = [
    { id: 1, title: 'Book 1', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
    { id: 2, title: 'Book 2', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
    { id: 3, title: 'Book 3', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
    { id: 4, title: 'Book 4', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
    { id: 5, title: 'Book 5', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
    { id: 6, title: 'Book 6', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
    { id: 7, title: 'Book 7', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
  ];

  return (
    <div className="p-4 w-full ">
      {/* Title and Info Banner */}
      <InfoBanner />
      
      {/* Main Banner */}
      <Banner
        title="Neuroanatomy Books"
        subTitle="A pioneering interactive approach to the teaching of neuroanatomy"
        buttonText="Shop Now"
        imgurl="./image.jpeg"
      />
    
      {/* Explore Medical Books Section */}
      <h2 className="text-center text-2xl mb-6 text-gray-800">Explore Medical Books</h2>
      
      {/* Book Items */}
      <div className="w-full border-2 border-red-600 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {dummyBooks.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    
      {/* Bestsellers Section with Horizontal Scroll */}
      <div className="w-full border-2 border-red-600 flex justify-between items-center mb-6">
        <h2 className="text-2xl text-gray-800">Bestsellers</h2>
        <a href="#" className="text-blue-500 text-sm font-semibold">See All</a>
      </div>
      
      {/* Horizontal Scrollable Row */}
      <div className='w-full border-2 border-red-600'>
        <div className="flex overflow-x-auto gap-4 pb-4">
          {dummyBestsellers.map((book) => (
            <Item
              key={book.id}
              imgSrc={book.imgSrc}
              description={book.description}
              oldPrice={book.oldPrice}
              realPrice={book.realPrice}
              rating={book.rating}
            />
          ))}
        </div>
      </div>

      {/* Items 20 out of 348 Section */}
      <div className="w-full flex justify-between items-center mb-6">
        <h2 className="text-2xl text-gray-800">
          Items 20 out of 348
        </h2>
        <a href="#" className="text-blue-500 text-sm font-semibold">See All</a>
      </div>
    
      {/* Horizontal Scrollable Row with Two Items per Row on Mobile */}
      <div className='w-full'>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {dummyBestsellers.slice(0, 20).map((book) => (
            <Item
              key={book.id}
              imgSrc={book.imgSrc}
              description={book.description}
              oldPrice={book.oldPrice}
              realPrice={book.realPrice}
              rating={book.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
