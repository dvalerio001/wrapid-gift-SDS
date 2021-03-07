import React from 'react';
import '../Pages/Login.css'
import Header from "../components/Header";

const Home = ({handleLogout}) => {

    return(
        <section className = "hero">
            <nav>
              <Header />
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );
};

export default Home;
