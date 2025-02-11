import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { ImLink } from "react-icons/im";

const Projects = () => {
  const projects = [
    {
      src: "ecommerce.jpg",
      title: "Veggies-Ecommerce Website",
      des: "Developed a responsive e-commerce website with seamless navigation, product listing, shopping cart, and search functionality using React JS. Optimized performance by utilizing a static array for product data, reducing load time by 15%. Built with HTML, CSS, JavaScript, Tailwind CSS, Axios, and React JS.",
      skills: ["ReactJS", "Tailwind-CSS"],
      Glive: "https://github.com/Ashish-M-Sharma/Veggies-Ecommerce-",
      link: "https://veggies-ecommerce-website.netlify.app/",
    },
    {
      src: "contact_manager.jpg",
      title: "Contact Manager System",
      des: "Created a web-based Contact Manager for efficient contact management with CRUD operations using Axios. Users can add, update, and delete contacts with essential details like name and email through a simple and intuitive interface.",
      skills: ["ReactJS", "Tailwind-CSS", "Axios", "JSONserver"],
      Glive: "https://github.com/Ashish-M-Sharma/Contact_Manager",
      link: "https://contact-manager-five-zeta.vercel.app/",
    },

    {
      src: "code_editor.jpg",
      title: "Code Editor",
      des: "Made a real-time code editor with separate panels for HTML, CSS, and JavaScript, to code along with an output panel for live preview. Enables instant rendering of code changes, enhancing development efficiency and user experience.",
      skills: ["HTML", "CSS", "Javascript"],
      Glive: "https://github.com/Ashish-M-Sharma/Code-Editor",
      link: "https://basic-editor.netlify.app/",
    },
  ];
  return (
    <>
      {" "}
      <section id="projects" className="text-black">
        <section id="about">
          <div className="flex items-center gap-3 mx-6">
            <div className="w-[50px] h-[0.6px] border border-2 border-zinc-500 rounded-3xl"></div>
            <p className="text-[24px] leading-[32px] font-medium px-1">
              &lt; My Projects / &gt;
            </p>
          </div>

          {/* Project */}
          {projects.map((val, i) => {
            return (
              <div
                key={i}
                className="w-[95%] flex flex-col justify-center items-center space-y-7 mx-auto my-11 md:flex-col lg:flex-row lg:space-x-7 transition-transform duration-300 hover:scale-102"
              >
                <div className="w-full max-w-screen-md lg:max-w-none h-auto mx-auto bg-opacity-10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.25)] rounded-xl border border-transparent border-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
                  <div className="w-full flex flex-col lg:flex-row gap-8 px-3 items-center">
                    {/* Image */}
                    <div className="w-full md:w-[90%] lg:w-1/2 h-full rounded-md shadow-xl shadow-gray-400 overflow-hidden flex items-center justify-center">
                      <img
                        src={val.src}
                        alt="Project 1"
                        className="w-full h-full rounded-md"
                      />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-[90%] lg:w-[60%] flex flex-col gap-3 py-6">
                      <div>
                        <p className="text-[24px] md:text-[18px] font-inter leading-[32px] md:leading-[28px] font-[600]">
                          {val.title}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {val.skills.map((v, i) => (
                          <p
                            key={i}
                            className="px-[9.5px] py-[1px] bg-[#DCFCE7] text-[#166534] rounded-sm text-[14px] md:text-[12px] leading-[20px] font-[500]"
                          >
                            {v}
                          </p>
                        ))}
                      </div>

                      <div className="text-[18px] md:text-[14px] leading-[28px] md:leading-[20px] font-inter font-[400] text-[#4B5563]">
                        {val.des}
                      </div>

                      <div className="flex gap-3 justify-end px-3 py-2">
                        {/* GitHub Section */}
                        <div className="flex flex-col">
                          <a
                            href={val.Glive}
                            className="bg-white w-12 p-[11.5px] rounded-xl hover:bg-black hover:text-white hover:-translate-y-1 cursor-pointer transition duration-300 transform"
                          >
                            <TbBrandGithubFilled className="size-6 " />
                          </a>
                          <a
                            href={val.Glive}
                            className="flex items-center text-[14px] md:text-[12px] leading-[20px] font-[400] font-inter text-black gap-[5px]"
                          >
                            <p>Source Code</p>
                            <ImLink className="text-[14px] text-[#374151] font-[400] leading-[20px]" />
                          </a>
                        </div>

                        {/* Live Project Section */}
                        <div className="flex flex-col">
                          <a
                            href={val.link}
                            className="bg-white text-[#44885D] w-12 p-[11.5px] rounded-xl hover:bg-[#047857] hover:text-white hover:-translate-y-1 cursor-pointer transition duration-300 transform"
                          >
                            <BsLayoutTextSidebarReverse className="size-6 text-[14px] font-[400] leading-[20px] " />
                          </a>
                          <a
                            href={val.link}
                            className="flex items-center gap-[6px] text-[14px] md:text-[12px] leading-[20px] font-[400] font-inter text-black"
                          >
                            <p>Live Project</p>
                            <FaExternalLinkAlt className="text-[14px] text-[#374151] font-[400] leading-[20px]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Project Ends */}
        </section>
      </section>
    </>
  );
};

export default Projects;
