"use client"; // Marking this as a client component for useState

import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger Icon

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // To toggle the mobile menu

  return (
    <header className="flex justify-between items-center w-full lg:w-10/12  lg:mx-auto bg-white h-20">

      {/* Mobile Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <MenuIcon className="text-3xl text-black h-10" onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* Mobile Logo - Shows after Hamburger */}
      <div className="lg:hidden flex items-center justify-center ml-2">
        <AutoStoriesIcon className="text-4xl text-black" />
      </div>

      {/* Search Bar on Mobile and Desktop */}
      <div className="flex-1 lg:w-[45%] flex justify-center lg:justify-start md:hidden border-2 border-red-500">
        <SearchBar />
      </div>

      {/* Right Side Controls (on mobile) */}
      <div className="lg:hidden flex items-center justify-end w-[25%] space-x-4">
        {/* Cart Icon on Mobile */}
        <ShoppingCartIcon className="text-3xl text-black" />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-4 items-center justify-between w-full">
        {/* Desktop Logo */}
        <div className="flex items-center space-x-4">
          <AutoStoriesIcon className="text-3xl text-black" />
          <p className="font-sans text-black text-md leading-tight flex flex-col">
            <span>HEALTH SCIENCES</span> 
            <span>BOOKSTORE</span>
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-[45%] ">
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
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-0 left-0 w-full bg-white p-4 flex flex-col gap-4 ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-between">
          <PlaceIcon className="text-2xl text-black" />
          <div>
            <div className="text-xs font-sans text-black">Delivery & Site Preferences</div>
            <div className="text-xs font-sans text-black">address</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <PersonIcon className="text-2xl text-black" />
          <div>
            <div className="text-xs font-sans text-black">Hello, Sign In</div>
            <div className="text-xs font-sans text-black">Accounts & Lists</div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <ShoppingCartIcon className="text-2xl text-black" />
        </div>
      </div>
    </header>
  );
};

export default Header;
