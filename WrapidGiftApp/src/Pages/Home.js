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
        dataField={["name", "name.search"]}
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

       <SingleRange
       componentId = "ageFilter"
       dataField ="age"
       title= "Search by Age"
       data={[
        { start: 50, end: 100 , label: "50 years old & up" },
        { start: 17, end: 100 , label: "17 years old & up" },
        { start: 11, end: 16, label: "11 - 15 years old" },
        { start: 6, end: 10, label: "6 - 10 years old" },
        { start: 2, end: 5, label: "2 - 5 years old" },
        { start: 0, end: 1, label: "0 - 1 year(s) old" },
         
       ]}
        react={{
        and: "mainSearch"
      }}
       
       />
       <ResultCard
         componentId="results"
         dataField="name"
         react={{
           "and": ["mainSearch", "ratingsFilter","ageFilter"]
         }}
         onData={(res)=>
           ({
           "image": res.img,
           "title": res.name,
           "company": res.business,
           "description":  res.average_rating + " ★ "
         })}

       />

     </ReactiveBase>
   )

};

export default Home;
