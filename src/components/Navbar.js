import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { CgArrowLongUp } from "react-icons/cg";

function Navbar() {
  return (
    <div className="flex justify-center pl-[1vw] pr-[1vw]">
      <div className="flex items-center justify-center text-[#2B00AC] h-[8vw] border-b-[0.001vw] border-[#B8B8B8]">
        <div className="flex items-center gap-x-[10vw] w-[95%]">
          <Link to="frontend-react-wouessi-website-v2/" className="w-[20%]">
            <img src={logo} height="auto" className="cursor-pointer"></img>
          </Link>
          <ul className="flex gap-x-[2vw] py-3 w-[58vw] justify-center">
            <Link to="frontend-react-wouessi-website-v2/">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Home
              </li>
            </Link>
            <Link to="frontend-react-wouessi-website-v2/AboutUs">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                About Us
              </li>
            </Link>
            <Link to="frontend-react-wouessi-website-v2/Services">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Services
              </li>
            </Link>
            <Link to="frontend-react-wouessi-website-v2/Products">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Products
              </li>
            </Link>
            <Link to="frontend-react-wouessi-website-v2/Portfolio">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Portfolio
              </li>
            </Link>
            <Link to="frontend-react-wouessi-website-v2/ContactUs">
              <li className="py-2 hover:text-[#FF9900] hover:overline text-[1.1vw]">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <Link to="frontend-react-wouessi-website-v2/ContactUs">
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
