import React from 'react';
import Header from "../components/Header";

import './AddFriend.css';

const AddFriend = () => {

    return(
        <div className="addFriend-container">
        <div className="friend-form">
          <nav>
              <Header />
          </nav>
          <form>
              <h1>Enter a friend</h1>


          </form>
            </div>
        </div>
    );
};

export default AddFriend;
