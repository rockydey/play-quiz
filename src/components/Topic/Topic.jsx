import React from "react";
import { Link } from "react-router-dom";
// import { ForwardIcon } from "@heroicons/react/24/solid";

const Topic = ({ topic }) => {
  const { name, logo, id } = topic;
  return (
    <section className="p-4 shadow-lg rounded mt-10 ">
      <div className="">
        <img className="shadow bg-[#d1dae268]" src={logo} alt="" />
      </div>
      <div className="flex justify-between items-center my-4">
        <h2 className="text-xl">{name}</h2>
        <Link
          to={`/quiz/${id}`}
          className="border py-2 px-6 rounded bg-[#f53b57] text-white font-semibold text-lg"
        >
          Play Quiz
        </Link>
      </div>
    </section>
  );
};

export default Topic;
