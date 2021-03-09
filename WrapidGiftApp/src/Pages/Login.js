import React from 'react';
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
                        <Link to = "/">
                        <button onClick={handleLogin}> Sign In </button> </Link>
                        <link to='/forgot-password'>Forgot Password</link>
                        <p> Dont have an account? <span onClick ={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>

                    ) : (
                        <>
                        <Link to = "/">
                        <button className="btm-button" onClick={handleSignup}> Sign Up</button> </Link>
                        
                        <p className="btm-text"> Have an account? <span onClick ={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>

                    )}
                </div>

            </div>

        </section>
    )

};

export default Login;
