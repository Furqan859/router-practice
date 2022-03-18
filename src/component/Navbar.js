import React from 'react';
import './NavItems/NavStyles/Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
    
      <ul className="list">
      
      
      
      <li><NavLink to='/about'className="items">About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
      <li><NavLink to='/signup'className="items">Login</NavLink></li>
        </ul>
      <button className="btn">BTN</button>
    </nav>
  )
}