import React from 'react';
import Header from "../components/Header";
import { Container } from '../Container';


import './AddFriend.css';

const AddFriend = () => {

  const triggerText = 'Add a Friend';
  const onSubmit = (event) => {
    event.preventDefault(event);
    alert(event.target.name.value);
    console.log(event.target.gender.value);
    console.log(event.target.birthday.value);
    console.log(event.target.reminder.value);
    console.log(event.target.reminderTime.value);
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
