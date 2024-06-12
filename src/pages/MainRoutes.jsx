import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleProduct from '../components/products/SingleProduct'
import Home from './Home'
import AllProduct from './products/AllProduct'


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/all" element={<AllProduct/>} />
        <Route path="/all/:id" element={<SingleProduct/>} />

      </Routes>
    </div>
  )
}

export default MainRoutes
