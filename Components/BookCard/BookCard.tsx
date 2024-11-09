// BookCard.tsx
import React from 'react';

interface BookCardProps {
  imageSrc: string;
  category: string;
}

const BookCard: React.FC<BookCardProps> = ({ imageSrc, category }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <div className="bg-gray-100 rounded-lg p-4">
        <img src={imageSrc} alt={category} className="w-24 h-32 object-cover rounded-lg" />
      </div>
      <p className="font-semibold text-sm">{category}</p>
    </div>
  );
};

export default BookCard;
