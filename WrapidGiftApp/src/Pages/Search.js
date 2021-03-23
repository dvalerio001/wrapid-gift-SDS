import React from 'react';
import Header from "../components/Header";
import './Search.css';
import SearchImg from "../components/SearchImg"


const Search = () => {
  return (
    <div className="Search">
      <div className="search-container">
          <nav>
              <Header />
          </nav>
        <h1 className="search-title">Search</h1>
        <SearchImg />
      </div>
    </div>
  );
}

export default Search;