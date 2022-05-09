import React from 'react';

const baseAPI = 'http://localhost:1337'

const Product = ({ product, handleAddToCart }) => {
  const {
    image,
    title,
    price,
    description,
  } = product.attributes;
  return (
    <div className='Products-item'>
      <img src={`${baseAPI}${image.data[0].attributes.url}`} alt={title}/>
      <div className="Product-item-info">
        <h2>
          {title}
          <span> ${price}</span>
        </h2>
        <p>{description}</p>
      </div>
      <button type='button' onClick={handleAddToCart(product)}>
        Buy
      </button>
    </div>
  )
}

export { Product };