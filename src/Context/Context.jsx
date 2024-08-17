import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const shopContext = createContext(null);

export default function ShopState({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const SignUp = async () => {};

 
  return (
    <shopContext.Provider value={{}}>
      {children}
    </shopContext.Provider>
  );
}
