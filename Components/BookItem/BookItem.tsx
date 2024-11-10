
import Link from 'next/link';
import React from 'react';

// Define the type for the book item
interface Book {
  id: number;
  title: string;
  imageUrl: string;  // URL for the book image
}

// Dummy array of books
const dummyBooks: Book[] = [
  { id: 1, title: 'Book 1', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
  { id: 2, title: 'Book 2', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
  { id: 3, title: 'Book 3', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
  { id: 4, title: 'Book 4', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
  { id: 5, title: 'Book 5', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
  { id: 6, title: 'Book 6', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
  { id: 7, title: 'Book 7', imageUrl: 'https://via.placeholder.com/91.4x97.2' },
];

// BookItem component to render individual book details
const BookItem: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <Link href={'/books'} className="flex flex-col items-center bg-gray-300" style={{ width: '112px', height: '150px' }}>
      {/* Book Image */}
      <div className="flex justify-center items-end" style={{ width: '112px', height: '116.51px' }} >
        <img
          src={book.imageUrl}
          alt={book.title}
          className="mb-2"
          style={{ width: '91.4px', height: '97.2px', objectFit: 'cover' }}
        />
      </div>
      {/* Book Name Box */}
      <div
        className="flex items-center justify-center bg-gray-400"
        style={{ width: '112px', height: '34px' }}
      >
        <span className="text-center text-sm text-white">{book.title}</span>
      </div>
    </Link>
  );
};

export default BookItem;

// BookList component to iterate and display the books
