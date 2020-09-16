import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
          <div className='product_rating'></div>
          <p>{rating}</p>
        </p>
      </div>
      <img src={image} alt='' className='' />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
