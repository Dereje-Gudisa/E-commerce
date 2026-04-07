import React, { useState, useEffect } from 'react'
import Cards from './Cards.jsx';
import Advert from './Advert.jsx';
import products from './data/products.js';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter products based on category
  useEffect(() => {
    let filtered = products;

    switch(activeCategory) {
      case 'new':
        // For demo, show first 4 products as "new arrivals"
        filtered = products.slice(0, 4);
        break;
      case 'featured':
        // For demo, show products with even IDs as featured
        filtered = products.filter(product => product.id % 2 === 0);
        break;
      case 'top':
        // For demo, show products with odd IDs as top selling
        filtered = products.filter(product => product.id % 2 !== 0);
        break;
      default:
        filtered = products;
    }

    setFilteredProducts(filtered);
    setVisibleProducts(8); // Reset visible products when category changes
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + 8);
  };

  const currentProducts = filteredProducts.slice(0, visibleProducts);
  const hasMoreProducts = visibleProducts < filteredProducts.length;

  return (
    <div className='home'>
      <Advert />
      <h1>Our Products</h1>
      <div className="products">
        <button
          className={`items-track ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('all')}
        >
          All Products
        </button>
        <button
          className={`items-track ${activeCategory === 'new' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('new')}
        >
          New Arrivals
        </button>
        <button
          className={`items-track ${activeCategory === 'featured' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('featured')}
        >
          Featured
        </button>
        <button
          className={`items-track ${activeCategory === 'top' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('top')}
        >
          Top Selling
        </button>
      </div>
      <div className="card-holder">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <Cards key={product.id} product={product} />
          ))
        ) : (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>

      {hasMoreProducts && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={loadMoreProducts}>
            Load More Products
          </button>
        </div>
      )}

      {!hasMoreProducts && filteredProducts.length > 8 && (
        <div className="load-more-container">
          <p className="all-loaded">All products loaded</p>
        </div>
      )}
    </div>
  )
}

export default Home