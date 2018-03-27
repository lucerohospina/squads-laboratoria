import React, { Component } from 'react';
import Header from './components/Header';
import firebase from 'firebase';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    var config = {
      apiKey: "AIzaSyA0KGnze8Q2eeKLoxWNINrS-zuDe-Dzm5w",
      authDomain: "telmexhub-5da16.firebaseapp.com",
      databaseURL: "https://telmexhub-5da16.firebaseio.com",
      projectId: "telmexhub-5da16",
      storageBucket: "telmexhub-5da16.appspot.com",
      messagingSenderId: "360942649813"
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Login db={ firebase }/>
        <Footer/>
      </div>
    );
  }
}

export default App;
