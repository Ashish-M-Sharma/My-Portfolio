import React, { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link
          to="/#home"
          className="text-gray-700 text-lg hover:font-semibold"
          onClick={(e) => handleScroll(e, "home")}
        >
          <div className="text-2xl font-bold text-black">ASHISH SHARMA</div>
        </Link>

        {/* Desktop menu*/}
        <div className="hidden md:flex space-x-8">
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

        <span className="hidden md:flex justify-center items-center gap-1 bg-primary text-white px-3 py-2 rounded-md">
          <FaBriefcase />
          Hire Me
        </span>

        {/* Hamburger menu*/}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full flex flex-col items-center space-y-4 py-4 shadow-md">
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
          <span className="flex justify-center items-center gap-1 bg-primary text-white px-3 py-2 rounded-md">
            <FaBriefcase />
            Hire Me
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
