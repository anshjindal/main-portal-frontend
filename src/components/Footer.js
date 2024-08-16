import React from "react";
import "../styles/Footer.css";
import LogoFooter from "../LogoFooter.svg";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgArrowLongUp } from "react-icons/cg";

import WouessiLogoFooter from "../WouessiLogoFooter.svg";

function Footer() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[90%] pt-[3vw] pb-[3vw] flex gap-x-[6vw] border-t-[0.2vw] border-[#2B00AC]">
          <div className="space-y-[1vw] text-left mt-[-1vw]">
            <h1 className="text-[3vw] font-bold">Get in touch now.</h1>
            <p className="text-left text-[1vw] text-[#828282]">
              Wouessi is your key to digital in an ever evolving media
              landscape. From generating concepts to developing and online
              presence, we can do it all.
            </p>
            <div className="flex gap-x-[4vw] items-center">
              <div className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out duration-300 rounded-full flex items-center justify-center mt-[1vw] gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] text-center cursor-pointer z-10">
                Download <br></br> our Brochure
                <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
              </div>
              <div className="space-y-[2.5vw]">
                <div className="flex text-[#828282] text-[1.5vw] gap-x-[1.6vw]">
                  <FaFacebook />
                  <FaLinkedin />
                  <FaYoutube />
                  <FaInstagram />
                </div>
                <p className="text-[0.8vw] text-[#828282]">
                  Copyright &copy;2024 Wouessi. All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-[2vw]">
            <ul className="w-[13vw] space-y-[1.5vw] text-left text-[#828282] text-[1vw]">
              <li className="text-[#2B00AC]">Home</li>
              <li>Product Offerings</li>
              <li>Get A Quote</li>
              <li>Insights</li>
            </ul>
            <ul className="w-[13vw] space-y-[1.5vw] text-left text-[#828282] text-[1vw]">
              <li className="text-[#2B00AC]">About Us</li>
              <li>Our Team</li>
              <li>
                <Link to="frontend-react-wouessi-website-v2/Careers">
                  Careers
                </Link>
              </li>
              <li>Past works and reviews</li>
            </ul>
            <ul className="w-[13vw] space-y-[1.5vw] text-left text-[#828282] text-[1vw]">
              <li className="text-[#2B00AC]">Contact Us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[90%]">
          <img
            src={WouessiLogoFooter}
            className="w-[100%] h-[27vw] mt-[-10vw]"></img>
        </div>
      </div>
    </>
  );
}

export default Footer;
