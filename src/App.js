import React, { Component } from 'react';
import Header from './components/Header';
import Sprints from './components/Sprints';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Login/>
         <Route path="/Sprints" component={Sprints} />
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
