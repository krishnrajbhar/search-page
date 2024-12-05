import React from "react";

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search blogs..."
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
