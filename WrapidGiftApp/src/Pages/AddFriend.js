import React from 'react';
import Header from "../components/Header";
import { Container } from '../Container';


import './AddFriend.css';

const AddFriend = () => {

  const triggerText = 'Add a Friend';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  return (
    <div className="addFriend-container">
      <nav>
          <Header />
      </nav>
      <div className="addButton">

      <Container triggerText={triggerText} onSubmit={onSubmit} />


      </div>
    </div>
  );
};

export default AddFriend;
