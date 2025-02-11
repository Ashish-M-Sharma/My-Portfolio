import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-black">ASHISH SHARMA</div>
          <div className="flex space-x-8 hidden md:block">
            <Link
              to="/#home"
              className="text-gray-700 text-lg hover:font-semibold"
              onClick={(e) => handleScroll(e, "home")}
            >
              Home
            </Link>
            <Link
              to="/#about"
              className="text-gray-700 text-lg hover:font-semibold"
              onClick={(e) => handleScroll(e, "about")}
            >
              About
            </Link>
            <Link
              to="/#projects"
              className="text-gray-700 text-lg hover:font-semibold"
              onClick={(e) => handleScroll(e, "projects")}
            >
              Projects
            </Link>
            <Link
              to="/#contact"
              className="text-gray-700 text-lg hover:font-semibold"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Contact
            </Link>
          </div>
          <span className="flex justify-center items-center gap-1 bg-primary text-white px-3 py-2 rounded-md">
            <FaBriefcase />
            Hire Me
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
