import React from 'react'
import { Link } from 'react-router-dom';
import carousel1 from './assets/carousel-1.png';
import carousel2 from './assets/header-img.jpg';
import { FaArrowRightLong } from "react-icons/fa6";

const Advert = () => {
  return (
    <div className='advert'>
        <img src={carousel1} alt="carousel image" />
        <div className="advert-heading">
            <h1 className='advert-text'>On Selected Laptops, Desktop & Smart Phones</h1>
            <Link to='/shop' className='shop-now-button'>
              Shop Now<FaArrowRightLong className="right-arrow" />
            </Link>
        </div>
        <img src={carousel2} alt="carousel image" className='advert-image2' />
    </div>
  )
}

export default Advert