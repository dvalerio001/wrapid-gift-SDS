import React from 'react';
import Header from "./components/Header";
import Hero from './components/Hero';
import FirebaseAuth from './components/Login/FirebaseAuth'

import './App.css';
//import Home from "./Pages/Home";
import {BrowserRouter as Router, Switch, Route} from
'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'



function App() {


  return (
  <Router>
    <FirebaseAuth>
    
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/login" exact component={Login} />
    </Switch>
    </FirebaseAuth>
  </Router>
  );

  
}

export default App;
