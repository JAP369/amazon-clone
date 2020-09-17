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
            id='ac001'
            title='I AM the God Particle'
            price={36.99}
            image='https://m.media-amazon.com/images/I/41Mte1rZzdL.jpg'
            rating={5}
          />
          <Product
            id='ac002'
            title='Our Emotional Guidance System'
            price={24.99}
            image='https://m.media-amazon.com/images/I/51iU+s6vhVL._SS500_.jpg'
            rating={5}
          />
        </div>
        <div className='home_row'>
          <Product
            id='ac003'
            title='5X55 Manifestation: A Workbook for Applying the 5x55 Manifestation Method and Attracting Your Desires with Ease'
            price={11.11}
            image='https://images-na.ssl-images-amazon.com/images/I/41w6xJY9GkL._SX385_BO1,204,203,200_.jpg' //https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
            rating={3}
          />
          <Product
            id='ac004'
            title='42: Douglas Adams: Amazingly Accurate Answer to Life, the Universe and Everything'
            price={12.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51YI9x6fqrL._SX324_BO1,204,203,200_.jpg'
            rating={4}
          />
          <Product
            id='ac005'
            title='Our Emotional Guidance System'
            price={24.99}
            image='https://m.media-amazon.com/images/I/51iU+s6vhVL._SS500_.jpg'
            rating={5}
          />
        </div>
        <div className='home_row'>
          <Product
            id='ac00'
            title='I AM the God Particle'
            price={36.99}
            image='https://m.media-amazon.com/images/I/41Mte1rZzdL.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
