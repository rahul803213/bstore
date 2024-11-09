// ExploreMedicalBooks.tsx
import React from 'react';
import BookCard from '@/Components/BookCard/BookCard';
const ExploreMedicalBooks: React.FC = () => {
  const bookCategories = [
    { imageSrc: 'path/to/book1.jpg', category: 'Basic Medical Sciences' },
    { imageSrc: 'path/to/book2.jpg', category: 'Dentistry' },
    { imageSrc: 'path/to/book3.jpg', category: 'Medicine' },
    { imageSrc: 'path/to/book4.jpg', category: 'Nursing Books' },
    { imageSrc: 'path/to/book5.jpg', category: 'Pharmacology' },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center mb-6">Explore Medical Books</h2>

      {/* Book Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {bookCategories.map((book, index) => (
          <BookCard key={index} imageSrc={book.imageSrc} category={book.category} />
        ))}
      </div>
    </div>
  );
};

export default ExploreMedicalBooks;
