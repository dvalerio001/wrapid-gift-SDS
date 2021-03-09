import React from 'react';
import Header from "../components/Header";

import './About.css';
import image from './aboutPage.jpg';

const About = () => {

  return(
    <section className = "about-container">
      <nav>
        <Header />
      </nav>
      <h1>About</h1>
  </section>
  );
};

export default About;
