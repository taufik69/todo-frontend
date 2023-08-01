import React from "react";
import UploadInfo from "./HomeRight/Index";
const Home = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-3/5 bg-black"></div>
        <div className="w-2/5 bg-gray-800 flex justify-center items-center">
          <UploadInfo />
        </div>
      </div>
    </>
  );
};

export default Home;
