"use client"
import React, { useContext } from "react";
import Link from "next/link";
import { StoreContext } from "@/Helper/Context";

const CartTotal = () => {
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <>
      <div>
        <h1 className="text-3xl capitalize font-semibold mb-4">cart totals</h1>
        <div className="flex items-center justify-between py-2 border-b border-black/40 capitalize tracking-tight">
          <p>subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-black/40 capitalize tracking-tight">
          <p>Delivery Fee</p>
          <p>${getTotalCartAmount() == 0 ? 0 : 10}</p>
        </div>
        <div className="flex items-center justify-between py-2 font-medium capitalize tracking-tight mb-5">
          <p>Total</p>
          <p>${getTotalCartAmount() == 0 ? 0 : getTotalCartAmount() + 10}</p>
        </div>
        <div>
          <Link
            href={"/place-order"}
            className="bg-[tomato] py-2 px-6 rounded-md cursor-pointer uppercase text-white text-sm"
          >
            proceed to checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
