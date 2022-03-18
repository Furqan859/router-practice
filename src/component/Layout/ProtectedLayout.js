import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'

export default function ProtectedLayout() {
  return (
    <nav >
      <ul className="list">
      
          <li><NavLink to='/about' className="items">About</NavLink></li>
          
          <li><NavLink to='/' className="items">Logout</NavLink></li>
          <li><NavLink to='/menu' className="items">Menu</NavLink></li>
          
          
         
          

        </ul>
      <button className="btn">BTN</button>

      <Outlet/>
    </nav>
  )
}