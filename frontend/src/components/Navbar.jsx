import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          LOGO
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/profiles" className="text-gray-600 hover:text-gray-900">
            Profiles
          </Link>
          <Link to="/projects" className="text-gray-600 hover:text-gray-900">
            Projects
          </Link>
          <Link to="/startups" className="text-gray-600 hover:text-gray-900">
            StartUps
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">
            About Us
          </Link>
          <Link
            to="/login"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
