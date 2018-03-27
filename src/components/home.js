import React from 'react';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import './../App.css';

const Home = () => {
    return(
    <div>
        <Header/>
        <Login/>
        <Footer/>
    </div>
    )
}

export default Home;