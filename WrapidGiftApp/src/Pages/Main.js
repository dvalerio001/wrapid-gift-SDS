import React, {Component} from 'react';
import Header from "../components/Header";
import {
  ReactiveBase,
  DataSearch,
  SingleRange,
  ResultCard,
  ReactiveList
} from '@appbaseio/reactivesearch';
import './Main.css';

class Main extends Component{

  constructor(props) {
       super(props);
       this.state = {
           showResultCard : true,
       };
   }

  handleClick = () =>  {
       this.state.showResultCard ?
     this.setState({ showResultCard: false }) : this.setState({ showResultCard: true });
  }

  render() {
    return (
    <ReactiveBase
     app="gift-finder"
     credentials="ly4UvZLp6:5f75aa34-198a-430d-91a3-522608087a0a">
    <nav class="home-container">
      <Header />
    </nav>

   (
    <div>
    <div>
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
    </div>
    <div className={"display"}>
         <div className={"leftSidebar"}>
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
        </div>
        </div>
        <div className="mainBar">
        <ReactiveList
          componentId="results"
          dataField="img"
          onData={(res) => <div><a href={res.business}><img src={res.img}></img></a>{res.name}{' Rating'}{res.average_rating}</div>}
          pagination
          URLParams
          react={{
            "and": ["mainSearch", "ratingsFilter","ageFilter"]
          }}
        />
        </div>
        </div> }
      </ReactiveBase>
    );
  }
};

export default Main;
