// src/components/Header.tsx
import React, { useState } from "react";
import { Search, ShoppingCart, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full  text-white fixed top-0 left-0 z-50 hover:bg-gray-800">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
     <div className="flex items-center space-x-10">   
        {/* Logo */}
        <Link to={`/`}>
        <div className="font-semibold tracking-wider text-lg cursor-pointer animate-lights">
          Best of the Universe
        </div> </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm tracking-widest uppercase ">
          <Link to={`/browse`}>
          <a href="#" className="hover:text-gray-300 transition animate-lights">Browse</a>
          </Link>
           {/* <Link to={`/clothing`}>
          <a href="#" className="hover:text-gray-300 transition animate-lights">Clothing</a>
          </Link>
          <Link to={`/accessories`}>
          <a href="#" className="hover:text-gray-300 transition animate-lights">Accessories</a>
          </Link> */}
          <Link to={`/`}>
          <a href="#" className="hover:text-gray-300 transition animate-lights">About Us</a>
          </Link>
          <Link to={`/`}>
          <a href="#" className="hover:text-gray-300 transition animate-lights">Blog</a>
        </Link>
        </nav>
</div>
        {/* Right Icons */}
        <div className=" animate-lights flex items-center space-x-5 ml-auto pr-12">
          {/* Currency Dropdown */}
          <div className="animate-lights flex items-center space-x-1 cursor-pointer text-m ">
            <img
              src="https://flagcdn.com/us.svg"
              alt="US Flag"
              className="w-6 h-6"
            />
            <span> USD $ </span>
            <ChevronDown className="w-4 h-4" />
          </div>

          {/* Search Icon */}
          <button onClick={() => setIsSearchOpen(true)}>
            <Search className="animate-lights w-5 h-5 hover:text-gray-300 transition " />
          </button>

          {/* Cart Icon */}
          <button>
            <ShoppingCart className=" animate-lights w-6 h-6 hover:text-gray-300 transition " />
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-900 px-6 py-6">
          <div className="flex items-center border-b border-gray-600">
            <Search className="w-5 h-5 text-gray-200 mr-3 animate-lights" />
            <input
              type="text"
              placeholder="SEARCH FOR..."
              className="animate-lights w-full bg-neutral-900 text-gray-200 placeholder-gray-200 focus:outline-none py-2"
            />
            <button onClick={() => setIsSearchOpen(false)}>
              <X className="w-6 h-6 text-gray-400 hover:text-white transition" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
