import React, { useEffect, useState } from 'react';
import "./product.css";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { accessoriesSingleDataGet } from '../../redux/accessories/action';
import { allSingleDataGet } from '../../redux/allProducts/action';
import { toast, ToastContainer } from 'react-toastify';

const SingleProduct = () => {

  const dispatch=useDispatch();
  const {id}=useParams();
  const location=useLocation();
  const { from } = location.state
  const single=useSelector((state)=>{
    if(from=="mens"){
     return state.mensReducer.singleProduct
    }
    else if(from =="womens"){
      return state.womensReducer.singleProduct
    }
    else if(from=="accessories"){
      return state.accessoriesReducer.singleProduct
    }
    else if(from=="all"){
      return state.allReducer.singleProduct
    }
  }
  );
  
  console.log("single",single)

  useEffect(()=>{
  
   if(from=="accessories"){
      dispatch(accessoriesSingleDataGet(id))
    }
    else if(from=="all"){
      dispatch(allSingleDataGet(id))
    }
    
  },[id])



   
 const [quantity,setQuantity]=useState(1);


 const quantityadding=(val)=>{
    setQuantity(quantity+val)
 }
//  console.log(quantity)
  return (
   
    <>
    
      <div className='single-products-main-div'>
      <div className='single-product-img'>
        <img
        src={single.imageurl}
        width="100%"
        height="100%"
        />
      </div>
      <div className='single-product-info'>
        <h1>{single.brand}{" "} ({single.typeofproduct})</h1>
        <p>{single.Name}
        </p>
        <h2>Rs{" "}{single.price*quantity}/-</h2>

    <div className='single-plus-min'>
  <button onClick={()=>quantityadding(-1)} className='cartaddicon'>
    {/* <AiOutlineMinus className='cartaddicon'/> */}
    -
  </button>
  <span>{quantity}</span>
  <button onClick={()=>quantityadding(1)} className='cartaddicon'>
    {/* <AiOutlinePlus className='cartaddicon' /> */}
    +
  </button>
</div>
<div className='single-product-button'>


</div>

      </div>
      
    </div>
    
    <ToastContainer />
    </>
  )
}

export default SingleProduct
