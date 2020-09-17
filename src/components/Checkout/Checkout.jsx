import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdIDF_JsS2dUqPYnZ51fHjU9KVpYqcgsjLKw&usqp=CAU'
          alt=''
          className='checkout_ad'
        />
        <div>
          <h2 className='checkout_title'>Your shopping basket</h2>
          {/* BasketItem
          BasketItem
          BasketItem
          BasketItem
          BasketItem */}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
