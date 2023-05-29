
import React from 'react';
import {Blog, Footer, Possibility, Features, WhatPoojaPinky, Header} from './containers'; //import containers 
import {Brand, Cta, Navbar} from './components'; //import components 
import './App.css';

const App = () => {
  return (
    <div className = "App">
        <div className = "gradient__bg">
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatPoojaPinky/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>

    
    </div>
  )
}

export default App
