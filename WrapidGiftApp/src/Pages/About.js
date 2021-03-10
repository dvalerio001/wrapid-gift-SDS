import React from 'react';
import Header from "../components/Header";

import './About.css';
import Tyler from './tyler.jpg'
import Liz from './profileLiz.jpg'
import Darnell from './nelly.jpg'

const About = () => {

  return(

   <div id="page-container">
      <section className = "about-container">
        <nav>
          <Header />
        </nav>
        <h1>About</h1>
        <p id="about-info">Pellentesque habitant morbi tristique senectus et netus et. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Eu consequat ac felis donec et. Euismod nisi porta lorem mollis. Non nisi est sit amet facilisis magna. Est sit amet facilisis magna. Integer malesuada nunc vel risus commodo viverra maecenas. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Suspendisse in est ante in. Morbi blandit cursus risus at. Maecenas volutpat blandit aliquam etiam erat velit. Tortor consequat id porta nibh venenatis</p>

        <h2>Meet the Team</h2>


        <h3 id="tyler">Tyler Spagnolo </h3>
          <img id="tylerImg" src={Tyler}/>

        <h4 id="liz">Elisabeth Ashley</h4>
          <img id="lizImg" src={Liz}/>

        <h5 id="darnell">Darnell Valerio</h5>
          <img id="darnellImg" src={Darnell}/>
      </section>



    <footer>
      <p id="footer-content">
      Wrapid Gift
      </p>
    </footer>
    </div>



  );
};

export default About;
