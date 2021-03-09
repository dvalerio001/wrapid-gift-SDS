import React from 'react';
import Header from "../components/Header";

import './About.css';



const About = () => {

  return(
    <section className = "about-container">
      <nav>
        <Header />
      </nav>
      <h1>About</h1>

      <h2>Meet the Team</h2>


      <span>Tyler Spagnolo </span>

      <span>Elisabeth Ashley </span>
      <span>Darnell Valerio </span>
      <p></p>
  </section>
  );
};

export default About;
