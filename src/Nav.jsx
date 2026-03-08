import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-items'>
      <Link to='/' className='nav-links'>Home</Link>
      <Link to="/" className='nav-links'>Shop</Link>
      <Link to="/" className='nav-links'>Single Page</Link>
      <Link to="/footer" className='nav-links'>Pages</Link>
      <Link to="/contact" className='nav-links'>Contact</Link>
      <Link to="/footer" className='nav-links'>Footer</Link>
    </div>
  )
}

export default Nav