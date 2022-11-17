import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductView from '../components/ProductView';

const Product = () => {
  return (
    <div className="bg-gradient-to-t from-blue-200">
    <Navbar/>
    <ProductView/>
    <Footer/>
    </div>
  )
}

export default Product