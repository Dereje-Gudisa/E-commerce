import React from 'react'
import Cards from './Cards.jsx';
import Advert from './Advert.jsx';
import products from './data/products.js';

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
        {products.map((product) => (
        <Cards key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home