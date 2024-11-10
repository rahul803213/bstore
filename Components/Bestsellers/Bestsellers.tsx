import React from 'react';
import Item from '../Items/Item';

// Define the type for book items
interface Book {
  id: number;
  imgSrc: string;
  description: string;
  oldPrice: string;
  realPrice: string;
  rating: number;
}

// Dummy array of bestsellers
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

const Bestsellers: React.FC = () => {
  return (
    <div className="p-4">
      {/* Title and See All Link */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl text-gray-800">Bestsellers</h2>
        <a href="#" className="text-blue-500 text-sm font-semibold">See All</a>
      </div>

      {/* Horizontal Scrolling Books */}
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
  );
};

export default Bestsellers;
