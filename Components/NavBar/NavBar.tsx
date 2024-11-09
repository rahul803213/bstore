import Link from 'next/link';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
function NavBar() {
  return (
    <div className="h-[7vh] bg-blue-950 w-full flex justify-start items-center p-4 shadow-lg">
      <div className="w-[80%] flex justify-around items-center gap-2 text-lg font-medium">
      <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out">
      <MenuIcon />
      </Link>

        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out">Books</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out">Lab Coats</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out">Scrubs</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out">Stethoscopes</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out">Medical Devices</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out">Accessories</Link>
      </div>
    </div>
  );
}

export default NavBar;
