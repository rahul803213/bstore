"use client"; // Marking this as a client component for useState

import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger Icon

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // To toggle the mobile menu

  return (
    <header className='w-full'>
      <header className="flex justify-between items-center lg:w-[90%] xl:w-[1024px] mx-auto bg-slate-50 h-20 ">

        {/* Mobile Hamburger Icon */}
        <div className=" lg:hidden flex items-center">
          <MenuIcon className="text-3xl text-black h-10" onClick={() => setMenuOpen(!menuOpen)} />
        </div>

        {/* Mobile Logo - Shows after Hamburger */}
        <div className=" lg:hidden flex items-center justify-center ml-2">
          <AutoStoriesIcon className="text-4xl text-black" />
        </div>

        {/* Search Bar on Mobile and Desktop */}
        <div className="flex ml-3 justify-center lg:justify-start md:hidden">
          <SearchBar />
        </div>

        {/* Right Side Controls (on mobile) */}
        <div className=" lg:hidden flex items-center justify-end  space-x-4 ">
          {/* Cart Icon on Mobile */}
          {/* <Image src={shoppingBag} alt="Shopping Bag" width={50} height={50} /> */}
          <ShoppingCartOutlinedIcon className="text-4xl " style={{ color: 'var(--headertextcolor)' }}/>
          </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-4 items-center  w-full ">
          {/* Desktop Logo */}
          <div className="flex items-center w-1/5  ">
            <AutoStoriesIcon className="text-4xl text-black" />
            <p className="font-sans font-bold text-teal-900 text-md leading-tight flex flex-col">
              <span>HEALTH SCIENCES</span> 
              <span>BOOKSTORE</span>
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center w-2/5 ">
            <SearchBar />
          </div>

          {/* Right Side Controls */}
          <div className="flex gap-4 items-center  justify-center  w-2/5">
            <div className="flex items-center text-sm w-[40%] ">
              <LocationOnOutlinedIcon className="text-2xl " style={{ color: 'var(--headertextcolor)' }} />
              <div className="ml-1">
                <div className="text-xs font-sans "style={{ color: 'var(--headertextcolor)' }}>Delivery & Site Preferences</div>
                <div className="text-md font-sans " style={{ color: 'var(--headertextcolor)' }}>address</div>
              </div>
            </div>

            <div className="flex items-center text-sm  w-[30%]">
              <PersonOutlineOutlinedIcon className="text-2xl " style={{ color: 'var(--headertextcolor)' }}/>
              <div className="ml-1">
                <div className="text-xs font-sans " style={{ color: 'var(--headertextcolor)' }}>Hello, Sign In</div>
                <div className="text-md font-sans " style={{ color: 'var(--headertextcolor)' }}>Accounts & Lists</div>
              </div>
            </div>

            <div className=" w-[20%]">
              <ShoppingCartOutlinedIcon className="text-4xl " style={{ color: 'var(--headertextcolor)' }}/>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-0 left-0 w-full bg-white p-4 flex flex-col gap-4 ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="flex items-center justify-between">
            <LocationOnOutlinedIcon className="text-2xl " style={{ color: 'var(--headertextcolor)' }} />
            <div>
              <div className="text-xs font-sans text-black">Delivery & Site Preferences</div>
              <div className="text-xs font-sans text-black">address</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <PersonOutlineOutlinedIcon className="text-2xl " style={{ color: 'var(--headertextcolor)' }} />
            <div>
              <div className="text-xs font-sans text-black">Hello, Sign In</div>
              <div className="text-xs font-sans text-black">Accounts & Lists</div>
            </div>
          </div>

          <div className="w-full flex justify-end">
            <ShoppingCartOutlinedIcon className="text-2xl " style={{ color: 'var(--headertextcolor)' }} />
          </div>
        </div>
      </header>
    </header>
  );
};

export default Header;
