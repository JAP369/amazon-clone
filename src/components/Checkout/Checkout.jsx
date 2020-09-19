import React from 'react';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdIDF_JsS2dUqPYnZ51fHjU9KVpYqcgsjLKw&usqp=CAU'
          alt=''
          className='checkout_ad'
        />
        <div>
          <h3>Hi, {user?.email}</h3>
          <h2 className='checkout_title'>Your shopping basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
