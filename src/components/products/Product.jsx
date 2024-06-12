import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import "./product.css";

const Product = ({product,productCategory}) => {
const navigate=useNavigate()


 const ViewDetails=()=>{
  navigate(`/${productCategory}/${product.id}`)
 }



  return (
    <div className='product'>
     <Link to={`/${productCategory}/${product.id}`} state={{ from: productCategory }} className="Link" >
      <div className='product_img'>
        <img
        src={product.imageurl}
        width="100%"
        height="100%"
        />
      </div>
      <div className='product_price_title'>
        <div>
          {`${product.price}Rs`}
        </div>
        <div className='product_title'>
        {product.Name}
        </div>
        <button onClick={ViewDetails} >View Details</button>
      </div>
      </Link>
      
    </div>
  )
}

export default Product
