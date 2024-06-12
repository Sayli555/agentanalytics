import React from 'react';
import TextTypewriter from '../components/TextTypewriter';
import { Tostify } from '../components/Tostify';
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
