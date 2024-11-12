import Link from 'next/link';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
function NavBar() {
  return (
    <div className="h-[40px] md:h-[60px] xl:h-[80px]  w-full shadow-lg overflow-x-auto" style={{ backgroundColor: 'var(--navbarcolor)' }}>
      <div className="w-fit sm:w-[80%] mx-auto text-xs md:text-sm xl:text-xl h-full flex justify-center items-center gap-5 md:gap-9 px-2 ">

        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out ">Books</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out ">Lab&nbsp;Coats</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out ">Scrubs</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out ">Stethoscopes</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out ">Medical&nbsp;Devices</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out ">Accessories</Link>
      </div>
    </div>
  );
}

export default NavBar;
