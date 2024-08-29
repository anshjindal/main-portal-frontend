import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { CgArrowLongUp } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [hamburgerMenu, openHamburgerMenu] = useState(false);

  return (
    <div className="flex justify-center pl-[1vw] pr-[1vw]">
      <div className="flex items-center justify-center text-[#2B00AC] h-[8vw] border-b-[0.001vw] border-[#B8B8B8] max-[350px]:w-[80%] max-[350px]:border-none max-[350px]:pt-[13vw] max-[350px]:pb-[9vw]">
        <div className="flex items-center gap-x-[10vw] w-[95%]">
          <Link
            to="frontend-react-wouessi-website-v2/"
            className="w-[20%] max-[350px]:w-[50%]">
            <img src={logo} className="cursor-pointer"></img>
          </Link>
          <ul className="flex gap-x-[2vw] py-3 w-[58vw] text-[1.1vw] justify-center cursor-pointer max-[350px]:hidden">
            <Link to="frontend-react-wouessi-website-v2/">
              <li className="py-2 hover:text-[#FF9900] hover:overline">Home</li>
            </Link>
            <Link to="frontend-react-wouessi-website-v2/AboutUs">
              <li className="py-2 hover:text-[#FF9900] hover:overline">
                About Us
              </li>
            </Link>
            <Link to="frontend-react-wouessi-website-v2/Services">
              <li className="py-2 hover:text-[#FF9900] hover:overline">
                Services
              </li>
            </Link>
            <Link to="frontend-react-wouessi-website-v2/Products">
              <li className="py-2 hover:text-[#FF9900] hover:overline">
                Products
              </li>
            </Link>
            <Link to="frontend-react-wouessi-website-v2/Portfolio">
              <li className="py-2 hover:text-[#FF9900] hover:overline">
                Portfolio
              </li>
            </Link>
            <Link to="frontend-react-wouessi-website-v2/ContactUs">
              <li className="py-2 hover:text-[#FF9900] hover:overline">
                Contact Us
              </li>
            </Link>
            <div
              onMouseEnter={() => setLanguageDropdown(true)}
              onMouseLeave={() => setLanguageDropdown(false)}>
              <div className="py-2 hover:text-[#FF9900] gap-x-[0.2vw] flex">
                <p
                  className={`${
                    languageDropdown
                      ? "rotate-[90deg] transition-all duration-300 font-bold"
                      : "font-bold"
                  }`}>
                  &gt;
                </p>
                <p>{language}</p>
              </div>
              {languageDropdown ? (
                <div className="absolute ml-[1vw] mt-[-0.9vw]">
                  <p
                    className="hover:text-[#FF9900]"
                    onClick={() => setLanguage("EN")}>
                    &gt; EN
                  </p>
                  <p
                    className="hover:text-[#FF9900]"
                    onClick={() => setLanguage("FR")}>
                    &gt; FR
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </ul>
        </div>
        <Link to="frontend-react-wouessi-website-v2/ContactUs">
          <div className="w-[10vw] h-[3.5vw] rounded-md border-[0.1vw] border-[#2B00AC] hover:border-[#FF9900] hover:text-[#FF9900] text-[1.1vw] flex items-center justify-center max-[350px]:hidden">
            Let's Talk
            <CgArrowLongUp className="ml-[1vw] text-[1.5vw] rotate-[90deg]" />
          </div>
        </Link>
        <div>
          <GiHamburgerMenu
            onClick={() => openHamburgerMenu(!hamburgerMenu)}
            className="w-[7vw] h-[7vw] cursor-pointer text-black min-[351px]:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
