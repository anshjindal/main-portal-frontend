import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { CgArrowLongUp } from "react-icons/cg";

function Navbar() {
  return (
    <div className="text-[#2B00AC] h-[8vw] flex justify-center">
      <div className="flex items-center w-[80%] border-b-[0.001vw] border-[#B8B8B8]">
        <div className="flex items-center gap-x-[10vw]">
          <Link to="/" className="w-[20%]">
            <img src={logo} height="auto" className="cursor-pointer"></img>
          </Link>
          <ul className="flex gap-x-[2vw] py-3 w-[58vw] justify-center">
            <Link to="/">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Home
              </li>
            </Link>
            <Link to="/AboutUs">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                About Us
              </li>
            </Link>
            <Link to="/Services">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Services
              </li>
            </Link>
            <Link to="/Products">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Products
              </li>
            </Link>
            <Link to="/Portfolio">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Portfolio
              </li>
            </Link>
            <Link to="/ContactUs">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <Link to="/ContactUs">
          <div className="w-[10vw] h-[3.5vw] rounded-md border-[0.1vw] border-[#2B00AC] hover:border-[#FF9900] hover:text-[#FF9900] text-[1.1vw] flex items-center justify-center">
            Let's Talk
            <CgArrowLongUp className="ml-[1vw] text-[1.5vw] rotate-[90deg]" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
