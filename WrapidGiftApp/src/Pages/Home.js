import React from 'react';
import Header from "../components/Header";
import '../components/Header.css';
import {
  ReactiveBase,
  DataSearch,
  SingleRange,
  ResultCard
} from '@appbaseio/reactivesearch';
import './Home.css';
import { Link } from 'react-router-dom';
import Carousel from "./Carousel";

const Home = () => {

    return(
      <section className="home">

        <div className="nav">
          <Header />

        </div>

        <div className="home-page">


          <div className="home-hero">

            <div className="hero-header">
              <h1>
                You need a gift
              </h1>
            </div>

            <div className="hero-subheader">
              <h5>
                We'll help you find it
              </h5>

              <Link to="/main">
                <button className="get-started-btn">
                  Get Started
                </button>
              </Link>
            </div>

          </div>

      </div>
      <div className="carousel">
      <Carousel/>
      </div>
      </section>


    )

};

export default Home;
