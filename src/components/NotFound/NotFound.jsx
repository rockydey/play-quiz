import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold md:text-5xl text-3xl text-center text-[#f53b57]">404! Sorry your destination is not found.</h1>
      <button className="pointer mt-5 py-2 px-6 border rounded bg-[#f53b57] hover:bg-[#f53b57dd] text-white font-semibold"><Link to='/'>BACK TO HOME</Link></button>
    </div>
  );
};

export default NotFound;
