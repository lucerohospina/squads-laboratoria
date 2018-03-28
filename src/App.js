<<<<<<< HEAD
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
=======
import React from 'react';
import Home from './components/home';
import Header from './components/Header';
import Footer from './components/Footer';

import Sprints from './components/Sprints';
import {
	BrowserRouter,
	Route,
  Switch
} from 'react-router-dom';

const App = (props) => {
	return (<BrowserRouter>
		<div className="App">
    <Header/>
			<Switch>
			<Route  path="/Home" render={() => <Home/>}/>

			<Route  path="/Sprints" render={() => <Sprints/>}/>
				<Route component={Home}/>
			</Switch>
      <Footer/>

		</div>
	</BrowserRouter>)
>>>>>>> 6195d725e4d5e287b672dd836c4ef5d23fb511c2
}

export default App;
