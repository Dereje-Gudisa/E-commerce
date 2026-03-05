import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav-items'>
      <Link className='nav-links'>Home</Link>
      <Link className='nav-links'>Shop</Link>
      <Link className='nav-links'>Single Page</Link>
      <Link className='nav-links'>Pages</Link>
      <Link className='nav-links'>Contact</Link>
    </div>
  )
}

export default Nav