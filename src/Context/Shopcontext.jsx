import React, { createContext, useState } from "react";
import products from "../assets/all_product";

export const ShopContext = createContext(null);

const getDefault = () => {
  let cart = {};
  for (let id = 1; id <= products.length; id++) {
    cart[id] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItem, setCartitem] = useState(getDefault());

  const addTocart = (itemId) => {
    setCartitem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromcart = (itemId) => {
    setCartitem((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const contextValue = {
    all_product: products,
    cartItem,
    addTocart,
    removeFromcart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;