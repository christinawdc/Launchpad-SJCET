import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">LOGO</Link>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/profiles" className="text-gray-600 hover:text-gray-900">Profiles</Link>
          <Link to="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
          <Link to="/startups" className="text-gray-600 hover:text-gray-900">Announcements</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
          </div>
          <Link to="/signup" className="bg-[#DCFFB9] text-black px-4 py-2 rounded-full hover:bg-[#c4f5a2]">Join Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
