"use client";
import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full px-4 flex justify-center z-30">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search tourist spots"
          className="w-full px-4 py-2 pr-10 rounded-full shadow-lg bg-white/80 backdrop-blur-md placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white text-sm"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800">
          <Search size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
