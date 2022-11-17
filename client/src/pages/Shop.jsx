import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import ProductList from '../components/ProductList';

const Shop = () => {
  return (
    <div className="bg-gradient-to-t from-blue-200">
      <Announcement/>
      <Navbar/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default Shop