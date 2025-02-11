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

        <div className="w-[90%] flex flex-col space-y-7 mx-auto my-11 md:flex-row md:space-y-0 md:space-x-7">
          <div className="w-full md:w-1/2 h-[450px] bg-opacity-10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.25)] rounded-xl border border-transparent border-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
            <div className="flex items-center gap-3 mx-6">
              <div className="w-[70px] h-[0.6px] border border-2 border-zinc-500 rounded-3xl"></div>
              <p className="text-[24px] leading-[32px] font-[500] px-1">
                &lt; My Skills / &gt;
              </p>
            </div>
            <div className="flex flex-col gap-8 my-12">
              <div className="flex justify-evenly flex-wrap">
                {aboutSkills.map((val, i) => {
                  return (
                    <span className="flex px-[50px] py-4 flex-col justify-center items-center">
                      <img src={val.src} alt="HTML" className="w-22" />
                      <p>{val.name}</p>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-[450px] bg-opacity-10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.25)] rounded-xl border border-transparent border-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
            <div className="flex items-center gap-3 mx-6">
              <div className="w-[70px] h-[0.6px] border border-2 border-zinc-500 rounded-3xl"></div>
              <p className="text-[24px] leading-[32px] font-[500] px-1">
                &lt; More About Me / &gt;
              </p>
            </div>
            <div className="flex flex-col gap-[12px] my-[11px] px-2">
              <p className="font-inter text-[20px] leading-[28px] font-[400] text-[#4B5563]">
                Hello! I'm Ashish Sharma, a passionate Electronics and
                Telecommunication graduate from Sinhgad College of Engineering,
                Solapur.
              </p>
              <p className="font-inter text-[20px] leading-[28px] font-[400] text-[#4B5563]">
                I specialize in building user-friendly web applications with
                proficiency in HTML, CSS, JavaScript, React.js, Bootstrap, and
                Tailwind CSS. Currently pursuing MERN stack development at
                Speedup Infotech, I'm expanding my skills in backend
                technologies. I’ve worked on dynamic projects that have
                strengthened my problem-solving abilities and passion for
                innovation.
              </p>
              <div className="flex gap-6 flex-wrap text-[28px] text-black leading-[24px] font-normal">
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
                <span className="flex text-[16px] font-[400] leading-[28px] md:text-[18px] justify-center items-center gap-1 bg-primary text-white hover:scale-95 px-2 py-1 rounded-md transition-transform duration-300 cursor-pointer">
                  <BsEnvelopeFill className="text-[18px] md:text-[20px] font-bold" />
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
