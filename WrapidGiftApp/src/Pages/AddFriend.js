import React from 'react';
import Header from "../components/Header";

import './AddFriend.css';

const AddFriend = () => {

    return(
        <section className = "addFriend-container">
            <nav>
              <Header />
            </nav>
            <button class="addButton">Add Friend</button>
        </section>
    );
};

export default AddFriend;
