import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between md:px-32 px-4 py-4 bg-[#4bcffa] items-center shadow-md">
      <div>
        <h2>
          <Link className="text-3xl font-semibold text-[#1e272e]" to="/">
            Play <span className="text-[#f53b57]">Quiz</span>
          </Link>
        </h2>
      </div>
      <div>
        <Link
          className="md:mr-8 mr-4 text-[#1e272e] text-base font-semibold"
          to="/topics"
        >
          Topics
        </Link>
        <Link
          className="md:mr-8 mr-4 text-[#1e272e] text-base font-semibold"
          to="/statistics"
        >
          Statistics
        </Link>
        <Link className="text-[#1e272e] text-base font-semibold" to="/blog">
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Header;
