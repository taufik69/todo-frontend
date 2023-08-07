import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeRight from "../HomeRight";
const HomeLeft = () => {
  const [fetchData, setfetchData] = useState([]);
  const [modal, setmodal] = useState(false);
  const [error, seterror] = useState(null);
  const [fromdata, setfromdata] = useState({
    fullName: "",
    email: "",
    Degisnation: "",
    EmployId: "",
  });

  useEffect(() => {
    const fethData = async () => {
      let axiosData = await axios.get(
        "http://localhost:3000/api/v1/home/getuser"
      );
      setfetchData(axiosData.data.data.allUser);
    };
    fethData();
  }, []);

  // edit button functionality start
  const Handledelete = async (items) => {
    try {
      let apiUrl = `http://localhost:3000/api/v1/home/delete/${items._id}`;
      let deleteItem = await axios.delete(apiUrl);
      console.log("clickable item is :", deleteItem);
    } catch (error) {
      console.log("error from handle delete item is :", error);
    }
  };

  const HandleEdit = () => {
    setmodal(true);
  };

  // modal input field validation and\

  //   Handleinput button machanism
  const Handleinput = (event) => {
    const { name, value } = event.target;
    setfromdata({ ...fromdata, [name]: value });
  };

  //   HandleSubmit functionality
  let HandleSubmit = async (event) => {
    try {
      event.preventDefault();
      // post data from frontend to backend via axios
      // let axiosPost = await axios.post(
      //   "http://localhost:3000/api/v1/home/postinfo",
      //   {
      //     fullName: fromdata.fullName,
      //     email: fromdata.email,
      //     degisnation: fromdata.Degisnation,
      //     employeId: fromdata.EmployId,
      //   }
      // );

      setfromdata({
        ...fromdata,
        fullName: "",
        email: "",
        Degisnation: "",
        EmployId: "",
      });
      // state null the error
      seterror(null);
    } catch (error) {
      seterror(error.response.data.error);
    }
  };
  console.log("from modal data : ", fromdata);
  return (
    <div className="flex flex-wrap gap-9 items-center justify-around overflow-y-scroll  h-screen">
      {fetchData.map((item, i) => (
        <div
          className="text-red-500 p-5 w-[45%] text-center  bg-white text-base rounded-sm "
          key={i}
        >
          <div className="body">
            <h1>{item.fullName} </h1>
            <h2>{item.email}</h2>
            <h3>{item.degisnation}</h3>
            <h4>{item.employeId} </h4>
            <div className="flex gap-x-4 items-center justify-center mt-5 sm:flex-wrap">
              <button
                className="border-2 border-green-600 px-3 py-1 bg-green-500"
                onClick={() => HandleEdit(item)}
              >
                edit
              </button>
              <button
                className="border-2 border-red-600 px-3 py-1 bg-red-500 text-white"
                onClick={() => Handledelete(item)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      {modal && (
        <div className="text-white absolute  bg-gray-900 w-[55%] h-[80%] p-5 ">
          <div
            className="p-4 bg-red-600  cursor-pointer inline-block"
            onClick={() => setmodal(false)}
          >
            X
          </div>
          <div>
            <form>
              <div className="py-4 text-white">
                <label htmlFor="">FullName</label>
                <br />
                <input
                  className="p-2 w-[100%] mt-3 text-black"
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={fromdata.fullName}
                  onChange={Handleinput}
                />
              </div>
              {error && (
                <span className="text-xm text-red-600">
                  {error.includes("fullname") ? error : null}
                </span>
              )}
              <div className="py-4 text-white">
                <label>Email</label>
                <br />
                <input
                  className="p-2 w-[100%] mt-3 text-black"
                  type="eamil"
                  name="email"
                  id="email"
                  value={fromdata.email}
                  onChange={Handleinput}
                />
              </div>
              {error && (
                <span className="text-xm text-red-600">
                  {error.includes("email") ? error : null}
                </span>
              )}
              <div className="py-4 text-white">
                <label>Degisnation</label>
                <br />
                <input
                  className="p-2 w-[100%] mt-3 text-black"
                  type="text"
                  name="Degisnation"
                  id="Degisnation"
                  value={fromdata.Degisnation}
                  onChange={Handleinput}
                />
              </div>
              {error && (
                <span className="text-xm text-red-600">
                  {error.includes("degisnation") ? error : null}
                </span>
              )}
              <div className="py-4 text-white">
                <label>EmployId</label>
                <br />
                <input
                  className="p-2 w-[100%] mt-3 text-black"
                  type="EmployId"
                  name="EmployId"
                  id="EmployId"
                  value={fromdata.EmployId}
                  onChange={Handleinput}
                />
              </div>
              {error && (
                <span className="text-xm text-red-600">
                  {error.includes("employeId") ? error : null}
                </span>
              )}
              <div className="py-4 flex items-center justify-center text-white">
                <button
                  type="submit"
                  className="px-10  py-2  border-2 border-green-500 "
                  onClick={HandleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeLeft;
