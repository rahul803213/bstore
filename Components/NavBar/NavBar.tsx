import Link from 'next/link';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
function NavBar() {
  return (
    <div className="h-[8vh] bg-blue-950 w-full shadow-lg overflow-x-auto">
      <div className="w-fit md:w-[80%] mx-auto text-xs md:text-lg h-full flex justify-start items-center gap-5 px-2">

        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out">Books</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out basis-24">LabCoats</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out">Scrubs</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out">Stethoscopes</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out">MedicalDevices</Link>
        <Link href="/" className="font-sans text-white hover:text-blue-300 transition duration-200 ease-in-out">Accessories</Link>
      </div>
    </div>
  );
}

export default NavBar;
