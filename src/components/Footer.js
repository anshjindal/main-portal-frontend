import React from "react";
import "../styles/Footer.css";
import FooterWouessiLogo from "../FooterWouessiLogo.svg";

function Footer() {
  return (
    <div className="bg-[#2B00AC]">
      <div className="flex justify-center mb-[2vw]">
        <div className="w-[80%]">
          <div className="pt-[3vw]">
            <img
              src={FooterWouessiLogo}
              className="w-[23vw] h-[7vw]"
              alt="logo"
            />
            <p className="text-left text-[1.2vw] text-[#C8CFD5] w-[23vw] mt-[1vw]">
              When do they work well, and when do they on us and finally, when
              do we actually need how can we avoid them.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t-[0.001vw] border-[#B8B8B8]">
        <div className="flex justify-between w-[80%] items-center text-[#C8CFD5] text-[1.2vw]">
          <div className="py-5">
            Copyright &#xa9; 2024 Rinico. All rights reserved
          </div>
          <div>
            About &#x2022; Contact &#x2022; Insights &#x2022; Approach &#x2022;
            Potfolio &#x2022; Career
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
