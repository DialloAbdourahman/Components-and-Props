import React from 'react';

const Product = ({ name, image, description, price }) => {
  return (
    <article className='product'>
      <img className='image' src={image} alt='' />
      <h2 className='name'>{name}</h2>
      <p className='description'>{description}</p>
      <p className='price'>Price: {price}$</p>
      <button className='buy'>Buy Now</button>
    </article>
  );
};

export default Product;
