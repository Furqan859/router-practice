import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'


export default function UnprotectedLayout() {
  return (
    <nav >
      <ul className="list">
       <li><NavLink to='/login' className="items">Login</NavLink></li>
          <li ><NavLink to='/signup' className="items">SignUp</NavLink></li>
           </ul>
      <button className="btn">BTN</button>
      <Outlet/>
    </nav>
  )
}