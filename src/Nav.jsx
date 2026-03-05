import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav-items'>
      <Link>Home</Link>
      <Link>Shop</Link>
      <Link>Single Page</Link>
      <Link>Pages</Link>
      <Link>Contact</Link>
    </div>
  )
}

export default Nav