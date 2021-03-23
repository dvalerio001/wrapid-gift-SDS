import React from "react";

export default function SearchImg() {
  return (
    <>
     <form className="search-form"> 
        <label className="search-label" htmlFor="query"> 
          {" "}
          
        </label>
        <input
          type="text"
          name="query"
          className="search-input"
          placeholder={`Try "dog" or "apple"`}
        />
        <button type="submit" className="search-button">Search</button>

      </form>

    </>
  );
}