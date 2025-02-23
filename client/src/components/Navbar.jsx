import React from 'react';
import SearchBar from './SearchBar';
const Navbar = () => {
  return (
    <>
            <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      {/* Left: Logo */}
      <div className="text-xl font-bold">FixitFreak</div>

      {/* Middle: Links + Search */}
      <div className="hidden md:flex gap-4 items-center">
        <a href="/">Home</a>             
        <a href="/page/plumbing">Plumbing</a>    
        <a href="/page/electrician">Electrician</a> 
        <a href="/page/cleaning">Cleaning</a>    
        <a href="/page/carpentry">Carpentry</a>   

        {/* <button className="ml-4 px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-700">
          Search
        </button> */}
        <SearchBar/>
      </div>

      {/* Right: Login/Logout */}
      <div className="flex gap-3">
        <button className="px-4 py-1 bg-blue-600 rounded-md hover:bg-red-700">
          Signin
        </button>
        <button className="px-4 py-1 bg-blue-600 rounded-md hover:bg-red-700">
          Signup
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;