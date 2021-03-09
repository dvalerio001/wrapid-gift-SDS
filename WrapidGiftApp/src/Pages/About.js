import React from 'react';
import Header from "../components/Header";

import './About.css';
import Tyler from './tyler.jpg'
import DarnellLiz from './liz_nelly.png'

const About = () => {

  return(
    <section className = "about-container">
      <nav>
        <Header />
      </nav>
      <h1>About</h1>

      <h2>Meet the Team</h2>


      <h3 id="tyler">Tyler Spagnolo </h3>
        <img id="tylerImg" src={Tyler}/>

      <h4>Elisabeth Ashley and Darnell Valerio  </h4>
        <img id="darnellLiz" src={DarnellLiz}/>

  </section>
  );
};

export default About;
