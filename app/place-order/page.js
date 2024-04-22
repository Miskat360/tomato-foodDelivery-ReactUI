import React from "react";
import CartTotal from "../components/CartTotal/CartTotal";

const PlaceOrder = () => {
  return (
    <>
      <div className="w-full flex items-center md:px-24 px-2">
        <div className="basis-1/2">
          <form className="w-full">
            <div className="w-full">
              <input type="text" placeholder="First name" className="" />
              <input type="text" placeholder="Last name" className="" />
            </div>
            <input type="email" placeholder="Email address" className="w-full"/>
            <input type="text" placeholder="Street" className="w-full"/>
            <div className="w-full">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
            </div>
            <div className="w-full">
              <input type="text" placeholder="Zip code" />
              <input type="text" placeholder="Country" />
            </div>
            <input type="number" placeholder="Phone" className="w-full"/>
          </form>
        </div>
        <div className="basis-1/2">
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
