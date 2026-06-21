import React, { useState, useEffect } from 'react';
import Cards from './Cards.jsx';
//import products from './data/products.js';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [loading, setLoading] = useState(true);

  // 🟢 Fetch setup using your centralized API base URL environment variable
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchShopProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        if (!response.ok) throw new Error('Failed to fetch shop inventory');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error loading live database items into Shop:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchShopProducts();
  }, [API_BASE_URL]);

  const categories = ['all', ...Array.from(new Set(products.map((product) => product.category)))];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name?.toLowerCase().includes(searchTerm.toLowerCase()) || product.category?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentProducts = filteredProducts.slice(0, visibleProducts);
  const hasMoreProducts = visibleProducts < filteredProducts.length;

  return (
    <div className='shop-page'>
      <section className='shop-hero'>
        <div className='hero-content'>
          <p className='shop-label'>Browse our latest collection</p>
          <h1>Shop with confidence.</h1>
          <p>Find top deals on electronics, accessories, and daily essentials. Tap the cards below to add items to your cart instantly.</p>
          <div className='shop-hero-stats'>
            <div>
              <strong>{products.length}</strong>
              <span>Available items</span>
            </div>
            <div>
              <strong>{categories.length - 1}</strong>
              <span>Categories</span>
            </div>
          </div>
        </div>
        <div className='hero-visual'>
          <div className='hero-bubble hero-bubble-1'>Free delivery</div>
          <div className='hero-bubble hero-bubble-2'>24/7 support</div>
          <div className='hero-bubble hero-bubble-3'>Easy returns</div>
        </div>
      </section>

      <div className='shop-tools'>
        <div className='shop-search'>
          <input
            type='search'
            placeholder='Search products, categories, or features...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='products'>
          {categories.map((category, index) => (
            <button
              key={`${category}-${index}`}
              className={`items-track ${activeCategory === category ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category);
                setVisibleProducts(12);
              }}
            >
              {category === 'all' ? 'All items' : category}
            </button>
          ))}
        </div>
      </div>

      <div className='card-holder'>
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => <Cards key={product._id} product={product} />)
        ) : (
          <div className='no-products'>
            <p>No results found. Try a different search term or category.</p>
          </div>
        )}
      </div>

      {hasMoreProducts && (
        <div className='load-more-container'>
          <button className='load-more-btn' onClick={() => setVisibleProducts((prev) => prev + 12)}>
            Load more products
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
