import React from "react";

import Header from "./components/Header/Header";
import ExploreMenu from "./components/ExploreMenu/ExploreMenu";
import FoodDisplay from "./components/FoodDisplay/FoodDisplay";

const Page = () => {

  return (
    <>
      <div className="md:px-24 px-2">
        <Header />
        <ExploreMenu />
        <FoodDisplay />
      </div>
    </>
  );
};

export default Page;
