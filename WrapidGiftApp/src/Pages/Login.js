import React from 'react';
import Header from "../components/Header";
import { Link, useHistory } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import fire from '../firebase';

import './Login.css';
import Home from './Home'

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;




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
                <label>Password</label>
                <input type = "password"
                required
                value = {password}
                onChange = {e => setPassword(e.target.value)}
                />

                <p className = "errorMsg">{passwordError}</p>
                <div className ="btnContainer">
                    {hasAccount ? (
                        <>
                       
                        <button onClick={handleLogin}> Log In </button> 
                        <p className="btm-text-signIn"> Dont have an account? <span onClick ={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        <div className="forgot-link-container">
                            <Link className="forgot-link" to="/forgot-password" style={{textDecoration: 'none'}}>Forgot Password?</Link>
                        </div>
                        </>

                    ) : (
                        <>
                        <button className="btm-button" onClick={handleSignup}> Sign Up</button> 
                        <p className="btm-text-signUp"> Have an account? <span onClick ={() => setHasAccount(!hasAccount)}>Log In</span></p>
                        </>

                    )}
                </div>

            </div>

        </section>
    )

};

export default Login;
