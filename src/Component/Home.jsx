import React from "react";
import UploadInfo from "./HomeRight/Index";
import HomeLeft from "./HomeLeft/Index";
const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="w-3/5 bg-black ">
          <HomeLeft />
        </div>
        <div className="w-2/5 bg-gray-800 flex justify-center items-center">
          <UploadInfo />
        </div>
      </div>
    </>
  );
};

export default Home;
