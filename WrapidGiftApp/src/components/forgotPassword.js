import React from 'react';
import Header from "./Header";
import { Link, useHistory } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useAuth} from 'react';


import '../Pages/Login.css';

const ForgotPassword = (props) => {

    const {
        email,
        setEmail,
        hasAccount,
        setHasAccount,
        emailError,
    } = props;

    const {resetPassword} = useAuth();

    





    return(
        <section className="login">
            <div className = "loginContainer">
            <h1 className="Header-text">Wrapid Gift</h1>
                <label className="user-label">Username</label>
                <input type = "text" autoFocus
                required
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                />
                <p className = " errorMsg">{emailError}</p>
                
                <div className ="btnContainer">
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

export default ForgotPassword;
