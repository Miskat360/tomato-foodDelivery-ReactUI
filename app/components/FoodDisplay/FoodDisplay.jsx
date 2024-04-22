import React from "react";

import FoodItem from "./FoodItem";
import { food_list } from "@/app/assets/assets";

const FoodDisplay = () => {
  return (
    <>
      <div className="w-full my-6">
        <h1 className="text-xl font-medium capitalize mb-8">Top dishes near you</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
          {food_list.map((item, index) => {
            return <FoodItem key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
