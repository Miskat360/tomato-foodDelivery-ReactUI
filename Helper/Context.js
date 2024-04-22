"use client";
import { food_list } from "@/app/assets/assets";
import React, { createContext, useState } from "react";
export const StoreContext = createContext();

const Context = ({ children }) => {
  const [activeSignIn, setActiveSignIn] = useState(false);
  const [foodCategory, setFoodCategory] = useState("All");
  const [netProductAddCount, setNetProductAddCount] = useState(0);
  const [cardItems, setCardItems] = useState({});

  const addToCard = (itemId) => {
    if (!cardItems[itemId]) {
      setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeToCard = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cardItems) {
      if (cardItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cardItems[item];
      }
    }
    return totalAmount;
  };
  const storeValue = {
    activeSignIn,
    setActiveSignIn,
    foodCategory,
    setFoodCategory,
    netProductAddCount,
    setNetProductAddCount,
    cardItems,
    setCardItems,
    addToCard,
    removeToCard,
    getTotalCartAmount
  };
  return (
    <div>
      <StoreContext.Provider value={storeValue}>
        {children}
      </StoreContext.Provider>
    </div>
  );
};

export default Context;
