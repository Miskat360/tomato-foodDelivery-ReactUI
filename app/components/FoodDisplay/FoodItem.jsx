"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";

import { assets } from "@/app/assets/assets";
import { StoreContext } from "@/Helper/Context";

const FoodItem = ({ item }) => {
  const { foodCategory, cardItems, addToCard, removeToCard } =
    useContext(StoreContext);
  const { _id, name, image, price, description, category } = item;
  return (
    <>
      <div
        className={`shadow-xl rounded-lg overflow-hidden cursor-pointer hover:scale-[1.01] relative ${
          foodCategory == "All"
            ? "block"
            : foodCategory == category
            ? "block"
            : "hidden"
        }`}
      >
        <Image src={image} alt="" className="w-full" />
        <div className=" bg-white absolute right-5 top-[42%] rounded-full">
          {!cardItems[_id] ? (
            <div
              onClick={() => {
                addToCard(_id);
              }}
              className="w-8 m-[3px]"
            >
              <Image src={assets.add_icon_white} alt="" />
            </div>
          ) : (
            <div className="flex items-center ">
              <div
                onClick={() => {
                  removeToCard(_id);
                }}
                className="w-8 m-[3px]"
              >
                <Image src={assets.remove_icon_red} alt="" />
              </div>
              <p className="px-1">{cardItems[_id]}</p>
              <div
                onClick={() => {
                  addToCard(_id);
                }}
                className="w-8 m-[3px]"
              >
                <Image src={assets.add_icon_green} alt="" />
              </div>
            </div>
          )}
        </div>
        {/* card body */}
        <div className="px-4 py-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-medium">{name}</h1>
            <div className="w-[30%]">
              <Image src={assets.rating_starts} alt="" />
            </div>
          </div>
          <p className="text-xs font-medium tracking-tighter mb-2">
            {description}
          </p>
          <p className="text-[tomato] font-semibold">${price}</p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
