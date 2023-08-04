import React, { useEffect, useState } from "react";
import axios from "axios";
const HomeLeft = () => {
  const [fetchData, setfetchData] = useState([]);

  useEffect(() => {
    const fethData = async () => {
      let axiosData = await axios.get(
        "http://localhost:3000/api/v1/home/getuser"
      );
      setfetchData(axiosData.data.data.allUser);
    };
    fethData();
  }, []);
  console.log("setfetchData :", fetchData);
  return (
    <div className="flex flex-wrap gap-9 items-center justify-center overflow-y-scroll h-screen">
      {fetchData.map((item) => (
        <div className="text-red-500 p-5 w-[45%] text-center  bg-white text-base rounded-sm ">
          <div className="body">
            <h1>{item.fullName} </h1>
            <h2>{item.email}</h2>
            <h3>{item.degisnation}</h3>
            <h4>{item.employeId} </h4>
            <div className="flex gap-x-4 items-center justify-center mt-5 sm:flex-wrap">
              <button className="border-2 border-green-600 px-3 py-1 bg-green-500">
                edit
              </button>
              <button className="border-2 border-red-600 px-3 py-1 bg-red-500 text-white">
                delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeLeft;
