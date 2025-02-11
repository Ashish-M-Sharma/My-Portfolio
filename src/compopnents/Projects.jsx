import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { ImLink } from "react-icons/im";

const Projects = () => {
  const projects = [
    {
      src: "contact_manager.jpg",
      title: "Contact Manager System",
      des: "The Contact Manager is a web application designed for efficient contact management. It allows users to perform CRUD operations—Create, Read, Update, and Delete—on their contact list using HTTP requests (GET, POST, PUT, DELETE ) handled with Axios. Each contact includes essential details such as name and email. The application features a simple and intuitive interface, enabling users to seamlessly add new contacts, update existing ones, and delete unnecessary entries",
      skills: ["ReactJS", "Tailwind-CSS", "Axios", "JSONserver"],
      Glive: "https://github.com/Ashish-M-Sharma/Contact_Manager",
      link: "https://contact-manager-five-zeta.vercel.app/",
    },
    {
      src: "form validation.png",
      title: "Form Validation",
      des: "The Contact Manager is a web application designed for efficient contact management. It allows users to perform CRUD operations—Create, Read, Update, and Delete—on their contact list using HTTP requests (GET, POST, PUT, DELETE) handled with Axios. Each contact includes essential details such as name and email. The application features a simple and intuitive interface, enabling users to seamlessly add new contacts, update existing ones, and delete unnecessary entries.",
      skills: ["ReactJS", "Tailwind-CSS"],
      Glive: "https://github.com/Ashish-M-Sharma/Contact_Manager",
      link: "https://contact-manager-five-zeta.vercel.app/",
    },
    {
      src: "Code Editor.jpg",
      title: "Code Editor",
      des: "The Form Validation System is a web application designed to provide an intuitive user experience for submitting data. It features a form with multiple fields that undergo real-time validation using ReactJS and Tailwind CSS. Each input field is validated based on predefined rules, ensuring that the submitted data is accurate and complete. Once all validations are successfully passed, the form submits the data, and the information is dynamically rendered on the page.",
      skills: ["HTML", "CSS", "Javascript"],
      Glive: "https://github.com/Ashish-M-Sharma/Contact_Manager",
      link: "https://contact-manager-five-zeta.vercel.app/",
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
              <div className="w-[95%] flex flex-col space-y-7 mx-auto my-11 md:flex-row md:space-y-0 md:space-x-7">
                <div className="w-full md:w-[1220px] h-[400px] mx-20 bg-opacity-10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.25)] rounded-xl border border-transparent border-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
                  <div className=" w-[100%] my-[-16px] flex gap-8 px-3">
                    <div className="w-1/2 rounded-md my-11 shadow-xl shadow-gray-400">
                      <img
                        src={val.src}
                        alt="Project 1"
                        className="h-full rounded-md"
                      />
                    </div>

                    <div className=" w-[60%]  flex flex-col gap-3 py-6  my-[-10px]">
                      <div>
                        <p className="text-[24px] font-inter leading-[32px] font-[600]">
                          {val.title}
                        </p>
                      </div>

                      <div className="flex gap-4">
                        {val.skills.map((v, i) => (
                          <p
                            key={i}
                            className=" px-[9.5px] py-[1px] bg-[#DCFCE7] text-[#166534] rounded-sm text-[14px] leading-[20px] font-[500]"
                          >
                            {v}
                          </p>
                        ))}
                      </div>

                      <div className="text-[18px] leading-[28px] font-inter font-[400] text-[#4B5563]">
                        {val.des}
                      </div>
                      <div className="flex gap-3 justify-end px-3 py-2">
                        <div className="flex flex-col">
                          <a
                            href={val.Glive}
                            className="bg-white w-12 p-[11.5px] rounded-xl hover:bg-black hover:text-white hover:-translate-y-1 cursor-pointer transition duration-300 transform"
                          >
                            <TbBrandGithubFilled className="size-6 " />
                          </a>
                          <a
                            href={val.Glive}
                            className="flex items-center text-[14px] leading-[20px] font-[400] font-inter text-black gap-[5px]"
                          >
                            <p>Source Code</p>
                            <ImLink className="text-[14px] text-[#374151] font-[400] leading-[20px]" />
                          </a>
                        </div>

                        <div className="flex flex-col">
                          <a
                            href={val.link}
                            className="bg-white text-[#44885D] w-12 p-[11.5px] rounded-xl hover:bg-[#047857] hover:text-white hover:-translate-y-1 cursor-pointer transition duration-300 transform"
                          >
                            <BsLayoutTextSidebarReverse className="size-6 text-[14px] font-[400] leading-[20px] " />
                          </a>
                          <a
                            href={val.link}
                            className="flex items-center gap-[6px] text-[14px] leading-[20px] font-[400] font-inter text-black"
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
