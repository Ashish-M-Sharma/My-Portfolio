import React, { useEffect } from "react";
import { FaBriefcase } from "react-icons/fa";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "./assets/asset 6.svg";
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
import Navbar from "./compopnents/Navbar";
import Hero from "./compopnents/Hero";
import About from "./compopnents/About";
import Projects from "./compopnents/Projects";
import Contact from "./compopnents/Contact";
import Footer from "./compopnents/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    ``;
  }, []);

  return (
    <Router>
      <div>
        <Navbar />

        <main className="mt-20">
          <div
            style={{ backgroundImage: `url(${bgImage})` }}
            className="bg-contain bg-center min-h-screen"
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />

                    <About />

                    <Projects />

                    <Contact />

                    <Footer></Footer>
                  </>
                }
              />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
