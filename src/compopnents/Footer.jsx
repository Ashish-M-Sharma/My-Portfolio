import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      {" "}
      <div className=" w-full flex flex-col justify-center items-center gap-3 underline  py-4 bg-zinc-300">
        <p className="font-inter text-[22px] font-medium ">My Socials</p>
        <div className="flex gap-5 text-[28px] text-black leading-[24px] font-normal">
          <a
            href="https://www.linkedin.com/in/ashish-sharma-0a5077271/"
            className="bg-white w-12 p-[11.5px] rounded-xl text-blue-700 hover:bg-blue-700 hover:text-white hover:-translate-y-1 cursor-pointer transition duration-300 transform"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/Ashish-M-Sharma"
            className="bg-white w-12 p-[11.5px] rounded-xl hover:bg-black hover:text-white hover:-translate-y-1 cursor-pointer transition duration-300 transform"
          >
            <TbBrandGithubFilled />
          </a>

          <a
            href="https://x.com/AshishS26495855"
            className="bg-white w-12 p-[11.5px] rounded-xl hover:bg-black hover:text-white hover:-translate-y-1 cursor-pointer transition duration-300 transform"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.instagram.com/ashu.sharma9665/"
            className="bg-white w-12 p-[11.5px] rounded-xl text-pink-600 hover:bg-pink-600 hover:text-white hover:-translate-y-1 cursor-pointer transition duration-300 transform"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
