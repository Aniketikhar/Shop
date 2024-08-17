import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const shopContext = createContext(null);

export default function ShopState({ children }) {
  

  return (
    <shopContext.Provider value={{  }}>
      {children}
    </shopContext.Provider>
  );
}
