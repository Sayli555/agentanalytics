import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import Products from '../../components/products/Products';
import TextTypewriter from '../../components/TextTypewriter';
import { allDataGet } from '../../redux/allProducts/action';
import "./allpr.css";
import 'react-toastify/dist/ReactToastify.css';


const AllProduct = () => {
    const AllProduct=useSelector((state)=>state.allReducer.allProducts);
    const dispatch=useDispatch();

    useEffect(()=>{
            dispatch(allDataGet())
    },[])

  return (
    <>
    <div className='mens'>
      
      <div className='products'>
      <TextTypewriter first="Welcome To" second="All Products" />
        <Products productCategory="all" products={AllProduct}/>
      </div>
    
    </div>
    <ToastContainer />
    </>
  )
}

export default AllProduct
