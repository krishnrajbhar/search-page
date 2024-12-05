import React, { useState } from "react";
import { blogPosts } from "./Data/MockData";
import SearchBox from "./Components/SearchBox";
import Filters from "./Components/Filters";
import ResultsList from "./Components/ResultsList";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResults = blogPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-center mb-6 sm:text-3xl">
        Blog Search
      </h1>
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ResultsList results={filteredResults} />
    </div>
  );
};

export default App;
