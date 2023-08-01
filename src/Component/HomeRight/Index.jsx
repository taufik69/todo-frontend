import React, { useState } from "react";

const uploadInfo = () => {
  const [fromdata, setfromdata] = useState({
    fullName: "",
    email: "",
    Degisnation: "",
    EmployId: "",
  });

  //   Handleinput button machanism
  const Handleinput = (event) => {
    const { name, value } = event.target;
    setfromdata({ ...fromdata, [name]: value });
  };

  console.log("fromdata", fromdata);
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
            onChange={Handleinput}
          />
        </div>
        <div className="py-4 flex items-center justify-end text-white">
          <button
            type="submit"
            className="px-10  py-2  border-2 border-green-500 "
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default uploadInfo;
