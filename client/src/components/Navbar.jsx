import React from 'react';
import SearchBar from './SearchBar';
const Navbar = () => {
  return (
    <>
           <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur-lg shadow-lg z-50 border-b border-gray-800">
  {/* Left: Logo */}
  <div className="text-3xl font-extrabold tracking-widest text-white drop-shadow-lg">
    FixItFreak
  </div>

  {/* Middle: Links + Search */}
  <div className="hidden md:flex gap-8 items-center text-lg font-medium">
    {["Home", "About", "Services", "Contact"].map((item) => (
      <a
        key={item}
        href="#"
        className="relative text-gray-300 transition-all duration-300 hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
      >
        {item}
      </a>
    ))}
    <SearchBar />
  </div>

  {/* Right: Login/Logout */}
  <div className="flex gap-5">
    <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg text-white font-semibold">
      Login
    </button>
    <button className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition duration-300 shadow-lg text-white font-semibold">
      Logout
    </button>
  </div>
</nav>

    </>
  );
};

export default Navbar;