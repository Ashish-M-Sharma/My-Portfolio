import React from "react";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

const About = () => {
  const aboutSkills = [
    {
      src: "HTML.png",
      name: "HTML",
    },
    {
      src: "css.png",
      name: "CSS",
    },
    {
      src: "js.png",
      name: "Javascript",
    },
    {
      src: "react.png",
      name: "ReactJs",
    },
    {
      src: "tailwind-css.png",
      name: "Tailwind CSS",
    },
    {
      src: "bootstrap.png",
      name: "Bootstrap",
    },
  ];
  return (
    <>
      <section id="about">
        <div className="flex items-center gap-3 mx-6">
          <div className="w-[50px] h-[0.6px] border border-2 border-zinc-500 rounded-3xl"></div>
          <p className="text-[24px] leading-[32px] font-medium px-1">
            &lt; About Me / &gt;
          </p>
        </div>

        <div className="w-[90%] flex flex-col space-y-7 mx-auto my-11 md:flex-col lg:flex-row  md:space-x-0 lg:space-x-7">
          <div className="w-full md:w-[90%] md:m-auto md:my-8 h-[450px] lg:mx-14 bg-opacity-10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.25)] rounded-xl border border-transparent border-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 transition-transform duration-300 hover:scale-102">
            <div className="flex items-center gap-3 mx-6">
              <div className="w-[70px] h-[0.6px] border border-2 border-zinc-500 rounded-3xl"></div>
              <p className="text-[24px] leading-[32px] font-[500] px-1">
                &lt; My Skills / &gt;
              </p>
            </div>
            <div className="sm:flex  flex-col gap-8 my-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {aboutSkills.map((val, i) => (
                  <span
                    key={i}
                    className="flex flex-col justify-center items-center"
                  >
                    <img src={val.src} alt={val.name} className="w-20" />
                    <p>{val.name}</p>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[90%] md:w-[90%] md:m-auto h-auto md:h-[450px] flex flex-col gap-3 bg-opacity-10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.25)] rounded-xl border border-transparent border-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 transition-transform duration-300 hover:scale-102 overflow-hidden md:overflow-visible">
            <div className="flex items-center gap-3 mx-6">
              <div className="w-[70px] h-[0.6px] border border-2 border-zinc-500 rounded-3xl"></div>
              <p className="text-[22px] sm:text-[24px] leading-[32px] font-[500] px-1">
                &lt; More About Me / &gt;
              </p>
            </div>

            <div className="flex flex-col gap-[18px] sm:gap-[20px] md:gap-[24px] my-[10px] px-2">
              <p className="font-inter text-[18px] sm:text-[19px] md:text-[20px] leading-[28px] font-[400] text-[#4B5563]">
                Hello! I'm Ashish Sharma, a passionate Electronics and
                Telecommunication graduate from Sinhgad College of Engineering,
                Solapur.
              </p>
              <p className="font-inter text-[18px] sm:text-[19px] md:text-[20px] leading-[28px] font-[400] text-[#4B5563]">
                I build user-friendly web apps using HTML, CSS, JavaScript,
                React.js, Bootstrap, and Tailwind CSS. Currently learning MERN
                stack at Speedup Infotech, expanding into backend development.
                Passionate about problem-solving and innovation through dynamic
                projects.
              </p>

              <div className="flex gap-4 sm:gap-6 flex-wrap text-[24px] sm:text-[26px] md:text-[28px] text-black font-normal">
                <a
                  href="https://www.linkedin.com/in/ashish-sharma-0a5077271/"
                  className="bg-white w-12 p-[10px] sm:p-[11px] rounded-xl text-blue-700 hover:bg-blue-700 hover:text-white hover:-translate-y-1 cursor-pointer transition duration-300 transform"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/Ashish-M-Sharma"
                  className="bg-white w-12 p-[10px] sm:p-[11px] rounded-xl hover:bg-black hover:text-white hover:-translate-y-1 cursor-pointer transition duration-300 transform"
                >
                  <TbBrandGithubFilled />
                </a>
                <a
                  href="https://x.com/AshishS26495855"
                  className="bg-white w-12 p-[10px] sm:p-[11px] rounded-xl hover:bg-black hover:text-white hover:-translate-y-1 cursor-pointer transition duration-300 transform"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.instagram.com/ashu.sharma9665/"
                  className="bg-white w-12 p-[10px] sm:p-[11px] rounded-xl text-pink-600 hover:bg-pink-600 hover:text-white hover:-translate-y-1 cursor-pointer transition duration-300 transform"
                >
                  <FaInstagram />
                </a>
                <span className="flex text-[14px] sm:text-[16px] md:text-[18px] font-[400] leading-[26px] sm:leading-[28px] md:leading-[30px] justify-center items-center gap-1 bg-primary text-white hover:scale-95 px-2 py-1 rounded-md transition-transform duration-300 cursor-pointer">
                  <BsEnvelopeFill className="text-[16px] sm:text-[18px] md:text-[20px] font-bold" />
                  Contact Me
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
