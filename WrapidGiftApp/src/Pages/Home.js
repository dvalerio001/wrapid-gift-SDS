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
       app="gift-finder"
       credentials="ly4UvZLp6:5f75aa34-198a-430d-91a3-522608087a0a"
     >

      <nav class="home-container">
        <Header />
      </nav>

     <DataSearch
        componentId="mainSearch"
        dataField={["name", "name.search", "price", "price.search"]}
        queryFormat="and"
        placeholder="Search gifts"
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
         dataField="name"
         react={{
           "and": ["mainSearch", "ratingsFilter"]
         }}
         onData={(res)=>({
           "image": res.img,
           "title": res.name,
           "company": res.business,
           "description":  res.average_rating + " ★ ",

         })}
       />

     </ReactiveBase>
   )

};

export default Home;
