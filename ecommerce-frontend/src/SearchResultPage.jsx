import React from 'react'
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import Cards from './Cards';
import { BsEmojiTearFill } from "react-icons/bs";


const SearchResultPage = () => {
  const { filteredProducts, search } = useContext(CartContext);

  return (
    <>
        <div className="search-page-container">
            {search && <p>Showing results for: {filteredProducts.length} products</p>}
            <div className="card-holder"> 
                {search && filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Cards key={product.id} product={product} showButton={true} />
                    ))
                ) : (
                    <>
                        <div className='no-result-text'>No Products Found !
                        <BsEmojiTearFill className='crying-emoji'/>
                        </div>
                    </>
                )}
            </div>
        </div>
    </>
  )
}

export default SearchResultPage