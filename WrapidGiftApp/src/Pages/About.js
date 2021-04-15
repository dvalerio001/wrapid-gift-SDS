import React from 'react';
import Header from "../components/Header";
import '../components/Header.css';

import './About.css';
import Gift from './about-gift.png'
import Tyler from './tyler.jpg'
import DarnellLiz from './liz_nelly.png'

const About = () => {

  return(
    <section className = "about-container">
      <nav>
        <Header />
      </nav>
      
      <section className="about-body">
        
        <div className="about-top">
          <div className="top-left">
            <h2>What is WrapidGift?</h2>
            <p>We know how much pressure comes with getting gifts for everyone, that is why we are here to help. 
              At WrapidGift, we aim to make this experience as easy as possible for you! Whether it's for Uncle
              Phil's 4th wedding, or baby Joseph's 1st birthday, we have you covered. 
            </p>
          </div>
          <div className="top-right">
            <h2>How Are We Different?</h2>
            <p>You'll notice there are no gender specific gifts in our system. It is important 
              to us that our community gets what they want, without society telling them they shouldn't!
              
            </p>
          </div>

          
        </div>

        <div className="about-btm">
          <h2>Meet the Team!</h2>
          <div className="btm-bubbles">
            <div className="Bubble 1">
              <h6>Tyler</h6>
              <hr color="white" />
              <p>Hi there! I am a Junior studying Computer Science at the State University of Plattsburgh.</p>
            </div>
            <div className="Bubble 1">
              <h6>Darnell</h6>
              <hr></hr>
              <p>Hi there! I am a Senior studying Computer Science at the State University of Plattsburgh.</p>
            </div>
            <div className="Bubble 1">
              <h6>Elisabeth</h6>
              <hr></hr>
              <p>Hi there! I am a Senior studying Computer Science at the State University of Plattsburgh.</p>
            </div>
          </div>
        </div>
        
      </section>

  </section>
  );
};

export default About;
