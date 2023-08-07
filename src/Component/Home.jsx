import React from "react";
import HomeLeft from "./HomeLeft/Index.jsx";
import HomeRight from "./HomeRight/Index.jsx";
const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="w-3/5 bg-black ">
          <HomeLeft />
        </div>
        <div className="w-2/5 bg-gray-800 flex justify-center items-center">
          <HomeRight />
        </div>
      </div>
    </>
  );
};

export default Home;
