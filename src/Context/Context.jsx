import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const shopContext = createContext(null);

export default function ShopState({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const SignUp = async () => {};

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://intern-task-api.bravo68web.workers.dev/api/products`,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmlrZXRAZ21haWwuY29tIiwiZXhwIjoxNzIzODg1MjA3MjAxLCJpYXQiOjE3MjM4ODE2MDd9.5OC3IARBhyOJO615pka_YMi-t0dc5Aoa2lMkQq0r-CU",
          },
        }
      );

      console.log("hey products");

      if (response) {
        setProducts(response.data);
        setLoading(false);
        console.log("this is the", products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <shopContext.Provider value={{ products, loading }}>
      {children}
    </shopContext.Provider>
  );
}
