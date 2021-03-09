import React from 'react';
import Header from "../components/Header";
import './Home.css';

const Home = () => {

    return(
        <section className = "home-container">
            <nav>
              <Header />
            </nav>
            <h1>Home</h1>
        </section>
    );
};

export default Home;
