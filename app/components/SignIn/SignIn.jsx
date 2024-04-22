import React from "react";
import Image from "next/image";
import { assets } from "@/app/assets/assets";

const SignIn = ({ activeSignIn, setActiveSignIn }) => {
  return (
    <>
      <div
        className={`w-full h-screen flex items-start justify-center fixed top-20 left-0 z-[999] bg-white pt-16 ${
          activeSignIn ? "flex" : "hidden"
        }`}
      >
        <div className="py-8 px-6 shadow-[0_0_5px_4px_#eee] bg-white rounded-md min-w-[25vw] relative">
          <h1 className="text-center text-xl font-semibold mb-4">Sign In</h1>
          <form action="" className="flex flex-col gap-4">
            <label htmlFor="name">
              <sup className="text-red-700 text-sm">*</sup>Name:
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="float-right border ml-2 py-1 px-4"
                required
              />
            </label>
            <label htmlFor="name">
              <sup className="text-red-700 text-sm">*</sup>Email:
              <input
                type="email"
                name="name"
                id="name"
                placeholder="Enter your email"
                className="float-right border ml-2 py-1 px-4"
                required
              />
            </label>
            <label htmlFor="password">
              <sup className="text-red-700 text-sm">*</sup>Password:
              <input
                type="password"
                name="name"
                id="name"
                placeholder="Enter your password"
                className="float-right border ml-2 py-1 px-4"
              />
            </label>
            <div className="flex items-center gap-4 text-sm">
              <p>Do not have an accoutn?</p>
              <span onClick={() => {}} className="underline cursor-pointer">
                Sign Up
              </span>
            </div>
            <label htmlFor="submit" className="text-center mt-4">
              <button
                type="submit"
                className="bg-[tomato] text-white py-2 px-5 rounded-full"
              >
                Sign IN
              </button>
            </label>
          </form>
          <div
            onClick={() => {
              setActiveSignIn(!activeSignIn);
            }}
            className="absolute w-9 h-9 bg-[tomato] right-0 top-0 rounded-tr-md rounded-bl-md flex items-center justify-center cursor-pointer"
          >
            <Image src={assets.cross_icon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
