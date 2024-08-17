import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import Navbar from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ProductList from "../../Components/ProductList/ProductList";
import axios from "axios";
import { shopContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [theme, setTheme] = useState(false);
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleTheme = () => {
    setTheme(!theme);
  }

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
        navigate('/login');
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
    <div className={ theme ? "bg-slate-900 " : ""}>
      <Navbar handleTheme={handleTheme} theme={theme} />
      <SearchBar handleSearch={handleSearch} products={productData} theme={theme} />
      <ProductList products={products} loading={loading} theme={theme}/>
    </div>
  );
};

export default Products;
