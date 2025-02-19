import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <h1>PopKino</h1>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <li>Series</li>
        <li>Movies</li>
        <li>Contact</li>
      </ul>
      <button>Login</button>
    </div>
  )
}

export default NavBar
