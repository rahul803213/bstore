import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <div className="flex items-center w-full font-sans  h-full">
      <input
        type="text"
        placeholder="Search by keyword, title, author or ISBN"
        className="w-[90%] py-2 px-4 rounded-l-full border border-gray-300 outline-none text-gray-600"
      />
      <button className="bg-teal-800 rounded-r-full p-[9px] w-[10%] flex items-center justify-center  ">
     <SearchIcon />


      </button>
    </div>
  );
};

export default SearchBar;
