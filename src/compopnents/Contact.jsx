import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="flex items-center gap-3 mx-6">
          <div className="w-[50px] h-[0.6px] border border-2 border-zinc-500 rounded-3xl"></div>
          <p className="text-[24px] leading-[32px] font-medium px-1">
            &lt; Contact Me / &gt;
          </p>
        </div>

        <div className="w-full  flex justify-center mt-10 ">
          <div className="w-1/3  p-6 flex justify-center items-center">
            <img src="email.svg" alt="email" className="w-[450px]" />
          </div>
          <div className="w-full md:w-1/2  flex justify-center items-center">
            <div className="w-[90%] flex flex-col justify-center items-center space-y-12 mx-auto my-11 md:flex-row md:space-y-0 md:space-x-7">
              <div className="w-full h-full  py-12 bg-opacity-10 backdrop-blur-md rounded-xl border border-transparent p-5 flex flex-col justify-center items-center space-y-4 shadow-xl">
                <a
                  href="mailto:a.m.sharma2501@gmail.com"
                  className="flex px-4 py-2 rounded-full bg-zinc-500 items-center gap-3 text-white text-lg hover:font-semibold  hover:-translate-y-2 cursor-pointer transition duration-300 transform"
                >
                  <SiGmail className="text-2xl" />
                  <span>a.m.sharma2501@gmail.com</span>
                </a>
                <a
                  href="tel: 9665630725"
                  className="flex px-4 py-2 rounded-full bg-zinc-500 items-center gap-3 text-white text-lg hover:font-semibold  hover:-translate-y-2 cursor-pointer transition duration-300 transform"
                >
                  <FaPhoneVolume className="text-2xl" />
                  <span>9665630725</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
