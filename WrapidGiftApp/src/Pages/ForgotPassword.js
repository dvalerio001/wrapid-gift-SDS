import React from 'react';
import Header from "../components/Header.js";
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from 'react';
import {BrowserRouter as Router, Switch, Route} from
'react-router-dom'

import './ForgotPassword.css';

const ForgotPassword = () => {
    return(
        <section className = "home-container">
            <nav>
              <Header />
            </nav>
            <h1>Forgot Password</h1>
        </section>
    );
};


/*const ForgotPassword = (props) => {

    const {
        email,
        setEmail,
        hasAccount,
        setHasAccount,
        emailError,
    } = props;

    const {resetPassword} = useAuth();


    return(
        <section className="forgot-password-container">
            <div className = "forgot-password-form">
            <h1 className="forgot-password-header-text">Wrapid Gift</h1>
                <label className="forgot-password-email-label">Email</label>
                <input type = "text" autoFocus
                required
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                />
                <p className = " errorMsg">{emailError}</p>
                
                <div className ="reset-password">
                    <button onClick={resetPassword}> Reset Password </button> 
                    <div>
                        <Link to ="/login">Login</Link>
                    </div>

                    <div>
                    <p className="btm-text-signIn"> Dont have an account? <span onClick ={() => setHasAccount(!hasAccount)}>Sign Up</span></p>

                    </div>

                </div>

            </div>

        </section>
    )

};
*/
export default ForgotPassword;
