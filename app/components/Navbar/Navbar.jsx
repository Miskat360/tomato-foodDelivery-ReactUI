"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/app/assets/assets";
import SignIn from "../SignIn/SignIn";
import { StoreContext } from "@/Helper/Context";

const Navbar = () => {
  const { activeSignIn, setActiveSignIn, getTotalCartAmount } =
    useContext(StoreContext);
  const [activeMenu, setActiveMenu] = useState("home");
  const [activesearch, setActiveSearch] = useState(false);
  return (
    <>
      <div className="w-full flex items-center justify-between py-7 md:px-24 px-2">
        <Link href={"/"} className="w-36">
          <Image src={assets.logo} alt="logo" />
        </Link>
        <ul className="flex items-center gap-6">
          {["home", "menu", "mobile app", "contact us"].map((item, index) => (
            <li key={index}>
              <Link
                href={
                  item == "home"
                    ? "/"
                    : item == "menu"
                    ? "/menu"
                    : item == "mobile app"
                    ? "/mobile-app"
                    : item == "contact us" && "/contact-us"
                }
                onClick={() => {
                  setActiveMenu(item);
                }}
                className={activeMenu == item && "border-b border-black"}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-10">
          <li onClick={() => {}} className="cursor-pointer flex gap-2">
            <label
              htmlFor="search"
              className={`${
                activesearch ? "flex" : "hidden"
              } border-2 border-black rounded-md items-center pr-4 pl-1`}
            >
              <input
                type="text"
                className="py-1 px-4"
                placeholder="pasta, noodles, cake ..."
              />
              <div>
                <Image src={assets.cross_icon} alt="" />
              </div>
            </label>
            <div
              onClick={() => {
                setActiveSearch(!activesearch);
              }}
              className="w-5 flex items-center"
            >
              <Image src={assets.search_icon} alt="" />
            </div>
          </li>
          <li className="w-5 relative">
            <Link href={"/addToCard"}>
              <Image src={assets.basket_icon} alt="" />
            </Link>
            {!getTotalCartAmount() == 0 && (
              <div className="absolute w-2 leading-none h-2 rounded-full bg-[tomato] -top-[5px] -right-1"></div>
            )}
          </li>
          <li>
            <Link
              href={""}
              onClick={() => {
                setActiveSignIn(!activeSignIn);
              }}
              className="border border-tomato rounded-full px-6 py-2 hover:bg-[tomato] hover:text-white transition-all duration-300 cursor-pointer"
            >
              sign in
            </Link>
          </li>
        </ul>
      </div>
      <SignIn activeSignIn={activeSignIn} setActiveSignIn={setActiveSignIn} />
    </>
  );
};

export default Navbar;
