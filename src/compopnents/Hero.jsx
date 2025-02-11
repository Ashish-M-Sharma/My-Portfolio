import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaExternalLinkAlt,
  FaRegFileAlt,
} from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaXTwitter, FaPhoneVolume } from "react-icons/fa6";
import { BsEnvelopeFill, BsLayoutTextSidebarReverse } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import { SiGmail } from "react-icons/si";

const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className="py-20 text-center text-white"
        data-aos="fade-up" // AOS Animation
      >
        {/* Home Section  Starts*/}
        <div className="w-[76%] mx-auto flex flex-col md:flex-row items-center md:items-start gap-5">
          {/* Left Section is here */}
          <div className="w-full md:w-[70%] flex flex-col items-start gap-2">
            <span className="flex items-center gap-2">
              <img
                className="w-10  rounded-full"
                src="hand2-unscreen.gif"
                alt="Wave Animation"
              />
              <p className="text-[24px] md:text-[30px] text-black font-[inter] leading-[32px] md:leading-[36px]">
                Hi, I am
              </p>
            </span>
            <span className="font-[inter] font-[700] text-primary leading-[40px] md:leading-[48px] text-[36px] md:text-[48px]">
              Ashish Sharma
            </span>
            <p className="text-[24px] md:text-[36px] leading-[30px] md:leading-[40px] font-[inter] text-black font-medium">
              I am a Front-End Developer
            </p>

            <span className="font-[inter,sans-serif] text-[18px] md:text-[22px] leading-normal text-[#4B5563] text-left">
              I am a skilled Front-End Developer with expertise in HTML, CSS,
              JavaScript, and React. Passionate about creating intuitive and
              responsive user interfaces, I leverage tools like Tailwind CSS to
              build aesthetically pleasing and efficient web applications. With
              a strong focus on performance optimization and seamless user
              experience, I aim to deliver dynamic solutions that engage users
              and enhance their overall interaction with digital platforms. My
              goal is to create visually compelling websites that are both
              functional and enjoyable to navigate.
            </span>

            {/* Social Media */}
            <div className="flex flex-col gap-5 mt-5">
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

              {/* Contact and Resume Part*/}
              <div className="flex gap-4">
                <a
                  href="mailto:a.m.sharma2501@gmail.com"
                  className="flex text-[16px] md:text-[18px] justify-center items-center gap-1 bg-primary text-white hover:scale-95 px-3 py-2 rounded-md transition-transform duration-300 cursor-pointer"
                >
                  <BsEnvelopeFill className="text-[18px] md:text-[20px] font-bold" />
                  Contact Me
                </a>

                <a
                  href="https://drive.google.com/file/d/1HpIEaDa4zsJO-mDlF8FuKtYScCAyg_v-/view?usp=sharing"
                  className="flex text-[16px] md:text-[18px] justify-center items-center gap-1 bg-red-700 text-white hover:scale-95 px-3 py-2 rounded-md transition-transform duration-300 cursor-pointer"
                >
                  <FaRegFileAlt className="text-[18px] md:text-[20px]" />
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Section is Here*/}
          <div className="w-full md:w-[40%] hidden lg:flex justify-center">
            <img
              className="w-[250px] md:w-[350px] mt-10 md:mt-28"
              src="asset 0.png"
              alt="Asset 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
