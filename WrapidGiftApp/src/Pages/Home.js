import React from 'react';
import '../Pages/Login.css'

const Home = ({handleLogout}) => {

    return(
        <section className = "hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );
};

export default Home;