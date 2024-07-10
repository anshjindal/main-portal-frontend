import React from "react";
import "../styles/Footer.css";
import FooterWouessiLogo from "../FooterWouessiLogo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#2B00AC]">
      <div className="flex justify-center">
        <div className="w-[80%]">
          <div className="flex gap-x-[6vw] items-center">
            <div>
              <img
                src={FooterWouessiLogo}
                className="w-[16vw] h-[7vw]"
                alt="logo"
              />
              <p className="text-left text-[1vw] text-[#C8CFD5] w-[23vw]">
                When do they work well, and when do they on us and finally, when
                do we actually need how can we avoid them.
              </p>
            </div>
            <div className="flex flex-col w-[13vw] text-white">
              <div className="flex items-center justify-center border-b-[0.01vw] border-l-[0.01vw] border-r-[0.01vw] border-[#B8B8B8] text-[1vw] p-[1vw] h-[4.5vw]">
                FACEBOOK
              </div>
              <div className="flex items-center justify-center border-[0.01vw] border-[#B8B8B8] text-[1vw] p-[1vw] h-[4.5vw]">
                TWITTER
              </div>
              <div className="flex items-center justify-center border-[0.01vw] border-[#B8B8B8] text-[1vw] p-[1vw] h-[4.5vw]">
                LINKEDIN
              </div>
              <div className="flex items-center justify-center border-t-[0.01vw] border-l-[0.01vw] border-r-[0.01vw] border-[#B8B8B8] text-[1vw] p-[1vw] h-[4.5vw]">
                INSTAGRAM
              </div>
            </div>
            <div className="flex items-center justify-center w-[32vw] text-[6vw] text-white font-light">
              LET'S TALK
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t-[0.001vw] border-[#B8B8B8]">
        <div className="flex justify-between w-[80%] items-center text-[#C8CFD5] text-[1.2vw]">
          <div className="p-10">
            Copyright &#xa9; 2024 Rinico. All rights reserved
          </div>
          <div className="flex gap-x-[0.3vw]">
            <p className="hover:underline cursor-pointer">About</p> &#x2022;
            <p className="hover:underline cursor-pointer">Contact</p> &#x2022;
            <Link to="frontend-react-wouessi-website-v2/Insights">
              <p className="hover:underline cursor-pointer">Insights</p>
            </Link>{" "}
            &#x2022;
            <p className="hover:underline cursor-pointer">Approach</p> &#x2022;
            <p className="hover:underline cursor-pointer">Potfolio</p> &#x2022;
            <Link to="frontend-react-wouessi-website-v2/Careers">
              <p className="hover:underline cursor-pointer">Careers</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
