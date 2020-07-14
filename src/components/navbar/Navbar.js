import React from 'react'
import './style.css'
//import icons
import {  Instagram, Twitter } from 'react-feather';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navLinkLeft"><p id="hashtag">#</p>Browse Skills</div>
      <div className="navLinkRight"><Instagram/><Twitter/>Login</div>
    </div>
  )
}
export default Navbar
