import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

  const navigate = useNavigate();

  const handelSelectChange =(event)=>{
    const path = event.target.value;
    console.log(path)
    if(path){
      navigate(path)
      event.target.value = '';
    }

  };

  return (
    <div className='nav-items'>
      <Link to='/' className='nav-links'>Home</Link>
      <Link to="/" className='nav-links'>Shop</Link>
      <Link to="/" className='nav-links'>Single Page</Link>
      <select name="pages" id="" onChange={handelSelectChange} defaultValue=''>
        <option value="" hidden>Pages</option>
        <option value="/BestSeller">Best Seller</option>
        <option value="/Cart">Cart page</option>
        <option value="/CheckOut">Check OUt</option>
        <option value="/NotFoundPage">404 Page</option>
      </select>
      <Link to="/Contact" className='nav-links'>Contact</Link>
    </div>
  )
}

export default Nav