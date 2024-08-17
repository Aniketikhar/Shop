import React from 'react';
import './Products.css';
import Navbar from '../../Components/Navbar/Navbar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import ProductList from '../../Components/ProductList/ProductList';

const Products = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <ProductList />
    </div>
  )
}

export default Products
