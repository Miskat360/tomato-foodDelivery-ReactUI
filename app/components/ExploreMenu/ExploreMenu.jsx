"use client";

import { menu_list } from "@/app/assets/assets";
import React, { useContext } from "react";
import Image from "next/image";
import { StoreContext } from "@/Helper/Context";
const ExploreMenu = () => {
  const {foodCategory, setFoodCategory} = useContext(StoreContext)
  return (
    <>
      <div className="w-full">
        <h1 className="text-[2vw] font-medium tracking-tighter">
          Explore our menu
        </h1>
        <p className="text-sm font-semibold w-[70%] mt-5 mb-8">
          Choose from a diverse menu featuring a delectable array of deshes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <div className="flex gap-8 items-center">
          {menu_list.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <Image
                onClick={() => {
                  setFoodCategory((pre) =>
                    pre == item.menu_name ? "All" : item.menu_name
                  );
                }}
                src={item.menu_image}
                alt=""
                className={`cursor-pointer rounded-full p-[2px] ${foodCategory == item.menu_name && "border-4 border-[tomato]"}`}
              />
              <p className="font-medium text-[15px] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          ))}
        </div>
        <hr className="h-[2px] w-full border-none  bg-black/20 mt-3"/>
      </div>
    </>
  );
};

export default ExploreMenu;
