// Header.tsx
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-[90%] mx-auto h-[8vh] mt-4">

      {/* Logo */}
      <div className="flex items-center justify-start space-x-4 h-full w-[20%]">
        <AutoStoriesIcon className="text-3xl text-black" />
        <span className="font-sans text-black text-md leading-tight">HEALTH SCIENCES BOOKSTORE</span>
      </div>

      {/* Search Bar */}
      <div className="w-[45%]">
        <SearchBar />
      </div>

      {/* Right Side Controls */}
      <div className="flex gap-4 items-center w-[25%] justify-end">
        
        <div className="flex items-center text-sm">
          <PlaceIcon className="text-2xl text-black" />
          <div className="ml-1">
            <div className="text-xs font-sans text-black">Delivery & Site Preferences</div>
            <div className="text-xs font-sans text-black">address</div>
          </div>
        </div>

        <div className="flex items-center text-sm">
          <PersonIcon className="text-2xl text-black" />
          <div className="ml-1">
            <div className="text-xs font-sans text-black">Hello, Sign In</div>
            <div className="text-xs font-sans text-black">Accounts & Lists</div>
          </div>
        </div>

        <div className="w-[5%]">
          <ShoppingCartIcon className="text-2xl text-black" />
        </div>
      </div>
    </header>
  );
};

export default Header;
