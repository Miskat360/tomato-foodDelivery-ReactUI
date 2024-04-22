"use client";
import { StoreContext } from "@/Helper/Context";
import React, { useContext } from "react";
import { food_list } from "../assets/assets";
import Image from "next/image";
import Link from "next/link";
import CartTotal from "../components/CartTotal/CartTotal";
const AddToCard = () => {
  const { cardItems, removeToCard, getTotalCartAmount } =
    useContext(StoreContext);
  return (
    <>
      <div className="w-full md:px-24 px-2 py-20">
        <div className="grid grid-cols-7 border-b border-black/50 capitalize text-gray-500 font-medium pb-5">
          {["items", "title", "price", "quantity", "total", "remove"].map(
            (item, index) => {
              return (
                <p key={index} className={`${item == "title" && "col-span-2"}`}>
                  {item}
                </p>
              );
            }
          )}
        </div>
        {food_list.map(({ _id, name, price, image }, index) => {
          if (cardItems[_id] > 0) {
            return (
              <div
                key={index}
                className="grid grid-cols-7 items-center py-4 border-b border-black/50"
              >
                <div className="w-[5vw]">
                  <Image src={image} alt="" />
                </div>
                <p className="col-span-2">{name}</p>
                <p>${price}</p>
                <p>{cardItems[_id]}</p>
                <p>${price * cardItems[_id]}</p>
                <p
                  className="cursor-pointer text-2xl"
                  onClick={() => {
                    removeToCard(_id);
                  }}
                >
                  x
                </p>
              </div>
            );
          }
        })}
        <div className="w-full my-20 flex items-center gap-44">
          <div className="basis-1/2 pr-20">
            <CartTotal />
          </div>
          <div className="basis-1/2 pr-20">
            <p>If you have a promo code, Enter it here</p>
            <form
              action=""
              className="bg-gray-200 flex items-center rounded-md w-full mt-4"
            >
              <input
                type="text"
                placeholder="promo code"
                className="border-none outline-none flex-1 px-4 bg-inherit"
              />
              <button className="bg-black text-white px-8 py-2 capitalize rounded-md">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCard;
