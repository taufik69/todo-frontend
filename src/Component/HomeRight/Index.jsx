import axios from "axios";
import React, { useState } from "react";

const uploadInfo = () => {
  const [fromdata, setfromdata] = useState({
    fullName: "",
    email: "",
    Degisnation: "",
    EmployId: "",
  });

  const [error, seterror] = useState({
    fullNameError: "",
    emailError: "",
    DegisnationError: "",
    EmployIdError: "",
  });

  //   Handleinput button machanism
  const Handleinput = (event) => {
    const { name, value } = event.target;
    setfromdata({ ...fromdata, [name]: value });
  };

  //   HandleSubmit functionality
  let HandleSubmit = (event) => {
    event.preventDefault();
    // post data from frontend to backend via axios

    setfromdata({
      ...fromdata,
      fullName: "",
      email: "",
      Degisnation: "",
      EmployId: "",
    });
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
