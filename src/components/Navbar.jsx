import React, { useState } from 'react'
import Logo from "../Assets/Logo.png"
import './navbar.css'
const Navbar = () => {
   
  return <nav>
    <div className='nav-logo-container'>
        <img className='nav-logo' src={Logo} alt='' />
    </div>
    
  </nav>

  
}

export default Navbar
