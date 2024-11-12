// components/Logo.js
import React from 'react';

const Logo = () => {
  return (
    <svg width="100" height="100" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      {/* Third page on the far left */}
      <rect x="0.01" y="7.08" width="19.82" height="31.57" fill="#90c2e7" />
      {/* Second page in the middle-left */}
      <rect x="6.64" y="1.27" width="17.32" height="36.15" fill="#4a9ad4" />
      {/* First page in the middle-right */}
      <rect x="13.51" y="0" width="14" height="37.74" fill="#2a73b8" />
      {/* Thick right "spine" page */}
      <rect x="27.23" y="1.15" width="18.68" height="36.79" fill="#203569" />
    </svg>
  );
};

export default Logo;
