import React from 'react';
import Header from "./components/Header";

import FirebaseAuth from './components/FirebaseAuth'

import './App.css';
//import Home from "./Pages/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgotPassword';
import Contact from './Pages/Contact';
import Search from './Pages/Search';
import AddFriend from './Pages/AddFriend';



function App() {
  return (



    <Router>

      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/addFriend" exact component={AddFriend} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path="/search" exact component = {Search}/>
        <FirebaseAuth>
        <Route path="/login" exact component={Login} />
        </FirebaseAuth>
     </Switch>

    </Router>

  );


}

export default App;
