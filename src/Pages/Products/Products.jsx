import React, { useEffect, useState } from 'react';
import './Products.css';
import Navbar from '../../Components/Navbar/Navbar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import ProductList from '../../Components/ProductList/ProductList';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const getProducts = async () => {
    try {
      
      const response = await axios.get(
        `https://intern-task-api.bravo68web.workers.dev/api/products`,
        {
          headers: {
            Authorization:
              `Bearer ${sessionStorage.getItem('token')}`,
          },
        }
      );

      console.log("hey products");

      if (response) {
        setProducts(response.data);
        setLoading(false);
        console.log("this is the", response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  useEffect(() => {
    getProducts();
  },[])
  return (
    <div>
      <Navbar />
      <SearchBar />
      <ProductList products={products} loading={loading} />
    </div>
  )
}

export default Products
