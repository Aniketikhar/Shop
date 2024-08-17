import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const shopContext = createContext(null);

export default function ShopState({ children }) {
    const [userEmail, setUserEmail] = useState();

  return (
    <shopContext.Provider value={{ userEmail , setUserEmail  }}>
      {children}
    </shopContext.Provider>
  );
}
