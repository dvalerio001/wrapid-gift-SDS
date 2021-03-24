import React from "react";
import  { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "lU73sJF1zc1rX7qL3OznYtNdgEKxuDW1o5ABSRT_nL4",
});



export default function SearchImg() {

  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  console.log(query);


  const searchimage = async (e) => {
  e.preventDefault();
  console.log("Submitting the Form")
  unsplash.search
    .photos(query)
    .then(toJson)
    .then((json) => {
      setPics(json.results);
    });

  };




  return (
    <>
     <form className="search-form"onSubmit={searchimage}> 
        <label className="search-label" htmlFor="query"> 
          {" "}
          
        </label>
        <input
          type="text"
          name="query"
          className="search-input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>

      </form>

      <div className="card-list">
        {
          pics.map((pic) => 
          <div className="card" key={pic.id}>
            <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
            ></img>

          </div>)
      
        }

      </div>

    </>
  );
}