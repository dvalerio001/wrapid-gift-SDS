import React from 'react';
import Header from "../components/Header";
import {
  ReactiveBase,
  DataSearch,
  SingleRange,
  ResultCard
} from '@appbaseio/reactivesearch';
import './Home.css';

const Home = () => {

    return(

      <ReactiveBase
       app="good-books-ds"
       credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
     >

      <nav class="home-container">
        <Header />
      </nav>
    
     <DataSearch
        componentId="mainSearch"
        dataField={["original_title", "original_title.search", "authors", "authors.search"]}
        queryFormat="and"
        placeholder="Search for a book title or an author"
        autosuggest={false}
        className="datasearch"
        innerClass={{
          "input": "searchbox",
          "list": "suggestionlist"
        }}
      />

      <SingleRange
         componentId="ratingsFilter"
         dataField="average_rating_rounded"
         title="Search Gifts"
         data={[
           { start: 4, end: 5, label: "★★★★ & up" },
           { start: 3, end: 5, label: "★★★ & up" },
           { start: 2, end: 5, label: "★★ & up" },
           { start: 1, end: 5, label: "★ & up" },
         ]}
         react={{
           and: "mainSearch"
         }}
       />
       <ResultCard
         componentId="results"
         dataField="original_title"
         react={{
           "and": ["mainSearch", "ratingsFilter"]
         }}
         onData={(res)=>({
           "image": res.image,
           "title": res.original_title,
           "description":  res.average_rating + " ★ "
         })}
       />

     </ReactiveBase>
   )

};

export default Home;
