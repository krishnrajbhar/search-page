import React from "react";

const Filters = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ["All", "React", "CSS", "JavaScript"];

  return (
    <div className="flex flex-wrap gap-2 p-4 justify-center sm:justify-start">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-md sm:px-6 sm:py-3 text-sm sm:text-base ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filters;
