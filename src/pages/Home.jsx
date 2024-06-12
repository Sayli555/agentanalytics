import React from 'react';
import "./home.css"
import AllProduct from './products/AllProduct';

const Home = () => {
  return (
    <div className='home-div'>
      <div className='home-all-products'>
        <AllProduct/>
      </div>
      
    </div>
  )
}

export default Home
