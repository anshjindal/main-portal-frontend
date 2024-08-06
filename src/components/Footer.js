import React from "react";
import "../styles/Footer.css";
import LogoFooter from "../LogoFooter.svg";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] pt-[3vw] pb-[3vw] flex gap-x-[6vw] border-t-[0.2vw] border-[#2B00AC]">
        <div className="space-y-[1.5vw] text-left">
          <img src={LogoFooter} alt="logo" className="w-[9vw]" />
          <p className="text-left text-[1vw] text-[#828282]">
            Wouessi is your key to digital marketing in an ever evolving media
            landscape. From generating concepts to developing and online
            presence, we can do it all.
          </p>
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
      {/* <div className="flex justify-center border-t-[0.001vw] border-[#B8B8B8]">
      </div> */}
    </div>
  );
}

export default Footer;
