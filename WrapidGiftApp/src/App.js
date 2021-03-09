import React from 'react';
import Header from "./components/Header";

import FirebaseAuth from './components/FirebaseAuth'

import './App.css';
//import Home from "./Pages/Home";
import {BrowserRouter as Router, Switch, Route} from
'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (

  <Router>

    <Switch>

      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <FirebaseAuth>
      <Route path="/login" exact component={Login} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      </FirebaseAuth>
    </Switch>

  </Router>

  );


}

export default App;
