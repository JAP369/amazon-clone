import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img
          className='home_image'
          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Projects/JumpIn/HongKong/JumpIn_HK_LANDINGPAGE_1500_2.jpg'
          alt=''
        />
        <div className='home_row'>
          <Product
            title='I AM the God Particle'
            price={36.99}
            image='https://m.media-amazon.com/images/I/41Mte1rZzdL.jpg'
            rating={5}
          />
          <Product />
        </div>
        <div className='home_row'>
          <Product />
          <Product />
          <Product />
        </div>
        <div className='home_row'>
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
