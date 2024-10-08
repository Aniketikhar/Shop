import React, { useContext, useEffect, useState } from "react";
import "./Products.css";
import Navbar from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ProductList from "../../Components/ProductList/ProductList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [theme, setTheme] = useState(false);
  const [userEmail, setUserEmail] = useState();

  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleTheme = () => {
    setTheme(!theme);
  };

  const handleUser = (user) => {
    setUserEmail(user);
  };

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

        if (response) {
          setProducts(response.data);
          setProductData(response.data);
          setLoading(false);
        }
      } catch (error) {
        navigate("/login");
      }
    };

    getProducts();
  }, [token]);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    if (searchTerm == "") {
      setProducts(productData);
      setLoading(false);
      return;
    } else {
      const filterProducts = await productData.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filterProducts);
      setLoading(false);
    }
  };

  return (
    <div className={theme ? "bg-slate-900 min-h-screen" : "min-h-screen"}>
      <Navbar handleTheme={handleTheme} theme={theme} handleUser={handleUser} />
      <SearchBar
        handleSearch={handleSearch}
        products={productData}
        theme={theme}
      />
      <ProductList
        products={products}
        loading={loading}
        theme={theme}
        userEmail={userEmail}
      />
    </div>
  );
};

export default Products;
