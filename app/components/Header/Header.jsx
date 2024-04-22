import React from "react";
import Link from "next/link";
import "./Header.scss"
const Header = () => {
  return (
    <>
      <div className="container w-full relative text-white md:px-20 my-8 px-2 pt-10 pb-20 rounded-xl">
        <div className="text-contaniner md:w-[50vw]">
          <h1 className="text-[4.5vw] w-[45vw] font-medium leading-snug">Order your favourite food here</h1>
          <p className="text-sm mt-4 mb-8 tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            reprehenderit delectus distinctio quis eveniet! Minus dolores
            laborum, nulla sequi facilis mollitia cum, id assumenda aut qui
            illum. Possimus, quam reprehenderit.
          </p>
          <Link href={""} className="bg-white text-black py-3 px-6 rounded-full text-sm font-semibold">view menu</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
