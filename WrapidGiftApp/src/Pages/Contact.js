import React, { useState } from 'react';
import Header from "../components/Header";
import './Contact.css';
import '../components/Header.css';
import firebaseConfig from '../firebase';
import Axios from 'axios';



const Contact = () => {
  const db = firebaseConfig.firestore();  

  const [formData, setFormData] = useState({})

  const updateInput = e => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
  const handleSubmit = event => {
      event.preventDefault()
      sendEmail()
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    }

  const sendEmail = () => {
      Axios.post(
        'https://us-central1-wrapid-gift-1693c.cloudfunctions.net/submit',
        formData
      )
        .then(res => {
          db.collection('emails').add({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date(),
          })
        })
        .catch(error => {
          console.log(error)
        })
    }

  return(
        <section className="whole-contact">
            <nav>
                <Header />
            </nav>
            <section className="app">
                <form className="form" onSubmit = {handleSubmit}>
                    <h1>Contact Form</h1>

                    <label>Name</label>
                    <input type="text"
                           name="name"
                           placeholder="Name"
                           onChange={updateInput}
                           value={formData.name || ''}
                           />

                    <label>Email</label>
                    <input  type="email"
                            name="email"
                            placeholder="Email"
                            onChange={updateInput}
                            value={formData.email || ''} />

                    <label>Message</label>
                    <textarea type="text"
                              name="message"
                              placeholder="Message"
                              onChange={updateInput}
                              value={formData.message || ''} ></textarea>
                    
                    <button type="submit">Submit</button>
                </form>
            </section>
        </section>
    );
};

export default Contact;