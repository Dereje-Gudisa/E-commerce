import React from 'react'
import carousel1 from './assets/carousel-1.png';
import carousel2 from './assets/header-img.jpg';
import { FaArrowRightLong } from "react-icons/fa6";

const Advert = () => {
  return (
    <div className='advert'>
        <img src={carousel1} alt="carousel image" />
        <div className="advert-heading">
            <h1 className='advert-text'>On Selcted Laptops & Desktop Or Smart Phone</h1>
            <button className='shop-now-button'>Shop Now<FaArrowRightLong className="right-arrow" /></button>
        </div>
        <img src={carousel2} alt="carousel image" className='advert-image2' />
    </div>
  )
}

export default Advert