import React from 'react';
import SearchBar from './SearchBar';
const Navbar = () => {
  return (
    <>
            <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      {/* Left: Logo */}
      <div className="text-xl font-bold">Logo</div>

      {/* Middle: Links + Search */}
      <div className="hidden md:flex gap-4 items-center">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
        {/* <button className="ml-4 px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-700">
          Search
        </button> */}
        <SearchBar/>
      </div>

      {/* Right: Login/Logout */}
      <div className="flex gap-3">
        <button className="px-4 py-1 bg-blue-600 rounded-md hover:bg-blue-700">
          Login
        </button>
        <button className="px-4 py-1 bg-red-600 rounded-md hover:bg-red-700">
          Logout
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;