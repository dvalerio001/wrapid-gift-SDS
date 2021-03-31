import React, { useState } from 'react';
import Header from "../components/Header";
import './Contact.css';
import '../components/Header.css';
import Phone from './phoneIcon.png'
import Email from './email.png'
import {database} from '../firebase'

const Contact = () => {

    return(
        <section className="whole-contact">
            <nav>
                <Header />
            </nav>
            <section className="app">
                <form className="form">
                    <h1>Contact Form</h1>

                    <label>Name</label>
                    <input placeholder="Name" />

                    <label>Email</label>
                    <input placeholder="Email" />

                    <label>Message</label>
                    <textarea placeholder="Message" ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </section>
        </section>
    );
};

export default Contact;