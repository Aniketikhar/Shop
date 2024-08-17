import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import Navbar from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ProductList from "../../Components/ProductList/ProductList";
import axios from "axios";
import { shopContext } from "../../Context/Context";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData ] = useState();
  const [loading, setLoading] = useState(true);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `https://intern-task-api.bravo68web.workers.dev/api/products`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("hey products");

        if (response) {
          setProducts(response.data);
          setProductData(response.data);
          setLoading(false);
          console.log("this is the", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [token]);

  const handleSearch = (searchTerm) => {
    const filterProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filterProducts);
  };

  return (
    <div>
      <Navbar />
      <SearchBar handleSearch={handleSearch} products={productData} />
      <ProductList products={products} loading={loading} />
    </div>
  );
};

export default Products;
