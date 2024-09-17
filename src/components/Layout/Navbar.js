import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/SVG/Wouessi_Logo_horizontal_tag.svg";
import { CgArrowLongUp } from "react-icons/cg";
import "../../styles/global.css";

function Navbar() {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [language, setLanguage] = useState("EN");

  return (
    <>
      <div className="flex justify-center pl-[1vw] pr-[1vw] navbar max-[450px]:hidden">
        <div className="flex items-center justify-center h-[8vw] border-b-[0.001vw] text-[#2B00AC] border-[#B8B8B8] max-[450px]:w-[80%] max-[450px]:border-none max-[450px]:pt-[13vw] max-[450px]:pb-[9vw]">
          <div className="flex items-center gap-x-[10vw] w-[95%]">
            <Link
              to="/"
              className="w-[20%] max-[450px]:w-[50%] z-10"
            >
              <img alt="" src={logo} className="cursor-pointer"></img>
            </Link>
            <ul className="flex gap-x-[2vw] py-3 w-[58vw] text-[1.1vw] justify-center cursor-pointer max-[450px]:hidden">
              <Link to="/" className="navbar-link"> 
                <li className="py-2  ">Home</li>
              </Link>
              <Link to="/AboutUs" className="navbar-link">
                <li className="py-2   ">About Us</li>
              </Link>
              <Link to="/Services" className="navbar-link">
                <li className="py-2  ">Services</li>
              </Link>
              <Link to="/Products" className="navbar-link">
                <li className="py-2   ">Products</li>
              </Link>
              <Link to="/Portfolio" className="navbar-link">
                <li className="py-2   ">Portfolio</li>
              </Link>
              <Link to="/Blogs" className="navbar-link">
                <li className="py-2   ">Blogs</li>
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setLanguageDropdown(true)}
                onMouseLeave={() => setLanguageDropdown(false)}>
                <div className="py-2 flex items-center gap-x-[0.2vw] cursor-pointer">
                  <p
                    className={`${
                      languageDropdown
                        ? "rotate-[90deg] transition-transform duration-300 font-bold"
                        : "font-bold"
                    }`}>
                    &gt;
                  </p>
                  <p>{language}</p>
                </div>
                {languageDropdown && (
                  <div className="absolute left-0 w-max bg-white border border-gray-300 shadow-lg rounded-md">
                    <p
                      className="px-4 py-2 hover:bg-[#FF9900] hover:text-white cursor-pointer transition-colors duration-300" 
                      onClick={() => setLanguage("EN")}>
                      &gt; EN
                    </p>
                    <p
                      className="px-4 py-2 hover:bg-[#FF9900] hover:text-white cursor-pointer transition-colors duration-300"
                      onClick={() => setLanguage("FR")}>
                      &gt; FR
                    </p>
                  </div>
                )}
              </div>
            </ul>
          </div>
          <Link to="/ContactUs">
            <div className="max-[450px]:hidden w-[10vw] h-[3.5vw] rounded-full border-[0.1vw] z-10 border-[#2B00AC] hover:bg-[#0033A0] hover:text-[#FFFFFF] text-[#2B00AC] flex items-center justify-center transition-all duration-300 ease-in-out relative shadow-inner hover:shadow-inner-custom ">
              Let's Talk
              <CgArrowLongUp className="ml-[1vw] text-[1.2vw] rotate-[90deg]" />
              <div className="absolute inset-0 rounded-full bg-[#0033A0] opacity-0 hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
