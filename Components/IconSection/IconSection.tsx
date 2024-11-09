import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

function IconSection() {
  return (
    <div className="h-[20vh] w-full bg-gray-100 flex justify-around items-center text-gray-700">
      {/* Each section */}
      <div className="flex flex-row items-center justify-center w-1/4">
        <HomeIcon fontSize="large" className="mb-1" />
        <span className="text-lg">Home</span>
      </div>
      <div className="flex flex-row items-center justify-center w-1/4">
        <WorkIcon fontSize="large" className="mb-1" />
        <span className="text-lg">Work</span>
      </div>
      <div className="flex flex-row items-center justify-center w-1/4">
        <SchoolIcon fontSize="large" className="mb-1" />
        <span className="text-lg">School</span>
      </div>
      <div className="flex flex-row items-center justify-center w-1/4">
        <LocalCafeIcon fontSize="large" className="mb-1" />
        <span className="text-lg">Cafe</span>
      </div>
    </div>
  );
}

export default IconSection;
