import React from 'react'
import Cards from './cards.jsx';
import Advert from './advert.jsx';


const Home = () => {
  return (
    <div className='home'>
      <Advert />
      
      <h1>Our Products</h1>
      <div className="products">
        <button className="items-track">All Products</button>
        <button className="items-track"> New Arrivals</button>
        <button className="items-track"> Featured</button>
        <button className="items-track"> Top Selling</button>
      </div>
      <div className="card-holder">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default Home