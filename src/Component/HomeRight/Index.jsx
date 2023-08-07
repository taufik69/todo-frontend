import React, { useState } from "react";
import axios from "axios";

const uploadInfo = () => {
  const [fromdata, setfromdata] = useState({
    fullName: "",
    email: "",
    Degisnation: "",
    EmployId: "",
  });

  const [error, seterror] = useState(null);

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
      let axiosPost = await axios.post(
        "http://localhost:3000/api/v1/home/postinfo",
        {
          fullName: fromdata.fullName,
          email: fromdata.email,
          degisnation: fromdata.Degisnation,
          employeId: fromdata.EmployId,
        }
      );

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

  return (
    <>
      <form>
        <div className="py-4 text-white">
          <label htmlFor="">FullName</label>
          <br />
          <input
            className="p-2 w-[150%] mt-3 text-black"
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
            className="p-2 w-[150%] mt-3 text-black"
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
            className="p-2 w-[150%] mt-3 text-black"
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
            className="p-2 w-[150%] mt-3 text-black"
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
        <div className="py-4 flex items-center justify-end text-white">
          <button
            type="submit"
            className="px-10  py-2  border-2 border-green-500 "
            onClick={HandleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default uploadInfo;
