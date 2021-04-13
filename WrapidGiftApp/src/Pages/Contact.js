import React, { useState } from 'react';
import Header from "../components/Header";
import './Contact.css';
import '../components/Header.css';
import firebaseConfig from '../firebase'


const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    const db = firebaseConfig.firestore();  

    const handleSubmit = (e) => {

        e.preventDefault();

        db.collection("Contacts").add({
            name: name,
            email: email,
            message: message,
        })
         .then(() => {
             alert("Message has been sent!");
         })
         .catch((error) => {
             alert(error.message);
         });

         setName("");
         setEmail("");
         setMessage("");

    };


    return(
        <section className="whole-contact">
            <nav>
                <Header />
            </nav>
            <section className="app">
                <form className="form" onSubmit = {handleSubmit}>
                    <h1>Contact Form</h1>

                    <label>Name</label>
                    <input placeholder="Name"
                           value = {name}
                           onChange = {(e) => setName(e.target.value)} 
                           />

                    <label>Email</label>
                    <input placeholder="Email"
                           value = {email}
                           onChange = {(e) => setEmail(e.target.value)}  />

                    <label>Message</label>
                    <textarea placeholder="Message" 
                              value = {message}
                              onChange = {(e) => setMessage(e.target.value)} ></textarea>
                    
                    <button type="submit">Submit</button>
                </form>
            </section>
        </section>
    );
};

export default Contact;