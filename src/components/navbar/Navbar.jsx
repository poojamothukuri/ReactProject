import React,{useState} from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from "../../assets/logo.jpg";

//BEM -> Block Element Modifier --- specified CSS naming convension
const Navbar = () => {
  const [toggleMenu, setToggleMenu]= useState(false);
  return (
    <div className = "poojapinky__navbar">
      <div className='poojapinky__navbar-links'>
        
        <div className='  '>
          <img src = {logo} alt= "logo"/>
          
          </div>
          <div className='poojapinky__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wpoojapinky'>About Myself</a></p>
          <p><a href='#possibility'>Experience</a></p>
          <p><a href='#features'>Projects</a></p>
          <p><a href='#blog'>Intrested topics </a></p>

          </div>

      </div>
      <div className = "poojapinky__navbar-sign">
      <p>Sign in</p>
      <button type ="button">sign up</button>
      </div>
      <div className='poojapinky__navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick = {()=>setToggleMenu(false)}/>
          :  <RiMenu3Line color='#fff' size={27} onClick = {()=>setToggleMenu(true)}/>
        
        }

      </div>
    </div>
  )
}

export default Navbar
