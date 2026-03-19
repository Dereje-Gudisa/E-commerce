import React from 'react'
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import Cards from './Cards';

const SearchResultPage = () => {
  const { filteredProducts, search } = useContext(CartContext);

  return (
    <>
        <div className="search-page-container">
            <p>Showing results for: {filteredProducts.length} products</p>
            <div className="card-holder"> 
                {search && filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Cards key={product.id} product={product} showButton={true} />
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    </>
  )
}

export default SearchResultPage