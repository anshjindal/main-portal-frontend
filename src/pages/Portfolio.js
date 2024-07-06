import React from "react";
import "../styles/Portfolio.css";
import { PiArrowCircleRightLight } from "react-icons/pi";
import { PiArrowCircleLeftLight } from "react-icons/pi";
import { BsArrowRightShort } from "react-icons/bs";
import LeftSideImagePortfolio from "../assets/left-side-image-portfolio.jpeg";
import RightSideImagePortfolio from "../assets/right-side-image-portfolio.png";

function Portfolio() {
  return (
    <div className="text-black flex justify-center">
      <div className="w-[80%] mt-[4vw]">
        <p className="text-left text-[1.1vw] mb-[0.7vw] text-[#757575]">
          OUR PORTFOLIO
        </p>
        <div className="flex gap-x-[10vw] items-center">
          <h1 className="text-[4vw]/[4vw] text-left w-[55vw] font-bold">
            Explore our new recently completed projects.
          </h1>
          <p className="w-[24vw] text-[1.1vw] text-left text-black float-right">
            We are web designers, developers, project managers, and digital
            solutions using the latest trends and technologies.
          </p>
        </div>
        <div className="w-1/6 mt-[2vw] border border-slate-600"></div>
        <div className="flex justify-end gap-x-[0.4vw] mt-[-1vw]">
          <PiArrowCircleLeftLight className="text-[5.5vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer" />
          <PiArrowCircleRightLight className="text-[5.5vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer" />
        </div>
        <div className="flex justify-center gap-x-[2vw] mt-[3vw] mb-[5vw] ">
          <div className="w-[50vw] pb-[2vw] bg-white rounded-2xl">
            <div className="flex w-full h-[29vw]">
              <img
                src={LeftSideImagePortfolio}
                className="h-full object-cover rounded-t-2xl"></img>
            </div>
            <div className="flex justify-center gap-x-[8vw] items-center bg-white text-black h-[7vw]">
              <div className="flex flex-col text-left">
                <h2 className="text-[2vw] font-bold">AfricaBlockChain</h2>
                <p className="text-[1.1vw]">Featured - Blockchain, Website</p>
              </div>
              <div className="w-[11vw] h-[3.5vw] rounded-md bg-[#FF9900] text-[1.1vw] flex items-center justify-center cursor-pointer">
                See Project
                <BsArrowRightShort className="text-[2vw]" />
              </div>
            </div>
          </div>
          <div className="w-[50vw] pb-[2vw] bg-white rounded-2xl">
            <div className="flex w-full h-[29vw]">
              <img
                src={RightSideImagePortfolio}
                className="h-full object-cover rounded-t-2xl"></img>
            </div>
            <div className="flex justify-center gap-x-[12vw] items-center text-black h-[7vw]">
              <div className="flex flex-col text-left">
                <h2 className="text-[2vw] font-bold">AfroLifestyle</h2>
                <p className="text-[1.1vw]">Featured - eCommerce</p>
              </div>
              <div className="w-[11vw] h-[3.5vw] rounded-md bg-[#FF9900] text-[1.1vw] flex items-center justify-center cursor-pointer">
                See Project
                <BsArrowRightShort className="text-[2vw]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
