import React from "react";

function HeroBanner({ Header, Content, BannerImage }) {
  return (
    <div className="flex items-center justify-center mb-[7vw]">
      <div className="w-[6.5vw] h-[28vw] bg-[#2B00AC] mt-[-2vw]"></div>
      <div
        style={{ backgroundImage: `url(${BannerImage})` }}
        className="w-[30vw] h-[40vw] bg-cover bg-[center]"></div>
      <div>
        <div className="flex justify-center items-center w-[44vw] h-[28vw] bg-[#2B00AC] mt-[2vw]">
          <div className="w-[80%] text-left text-white">
            <div className="flex">
              <h1 className="text-[3.5vw]/[4.2vw] font-bold">{Header}</h1>
              <div className="w-[12vw] flex justify-end items-center"></div>
            </div>
            <div className="flex justify-between mt-[3vw]">
              <div className="border-t-[0.1vw] border-white w-[5vw] h-[5vw]"></div>
              <p className="text-[1.1vw] w-[80%] mt-[-1vw]">{Content}</p>
            </div>
          </div>
        </div>
        <p className="mt-[2.5vw] text-[1vw] text-[#757575]">
          PROCESS &#x2022; CREATIVITY &#x2022; EXPERIENCE
        </p>
      </div>
    </div>
  );
}

export default HeroBanner;
