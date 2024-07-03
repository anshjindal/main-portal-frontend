import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo-footer.png";

function Footer() {
  return (
    <div>
      <footer className="w-full bg-[#2B00AC] text-white px-3 sm:px-6 lg:px-12 py-5 text-start sm:text-center">
        <div className="w-full sm:flex items-center">
          <div className="sm:w-1/3 py-9 sm:pb-12 ">
            <a href="index.html">
              <img src={logo} width="80px" height="auto" alt="logo" />
            </a>
            <p className="text-start">Get your business to the new heights</p>
          </div>
          <div className="sm:w-1/3 space-y-6">
            <a href="mailto:info@wouessi.com" className="text-3xl font-bold">
              info@wouessi.com
            </a>
            <p>140 Yonge street, suite 200 on m5c 1x6, Toronto</p>
          </div>
          <div className="sm:w-1/3 flex flex-col space-y-6">
            <p className="text-3xl font-bold">Contact</p>
            <a href="tel:+18443172845">Phone : +18443172845</a>
          </div>
        </div>
        <div className="sm:flex align-center justify-between sm:py-3 border-t-2 border-gray-500">
          <div className="py-5">
            Copyright &#xa9; 2024 Rinico. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
