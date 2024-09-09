import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";
import { BsArrowRightShort } from "react-icons/bs";
import AfricaBlockChainImage from "../assets/left-side-image-portfolio.jpeg";
import AfroLifestyleImage from "../assets/right-side-image-portfolio.png";
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";
import CallToActionSection from '../components/CalltoActionSection';


import AldeliaImage from "../assets/PortfolioAldeliaImage.png";
import ATRImage from "../assets/PortfolioATRImage.png";
import BuckheadImage from "../assets/PortfolioBuckheadImage.png";
import CanalPlus from "../assets/PortfolioCanalPlus.png";
import GIZImage from "../assets/PortfolioGIZImage.png";
import HamiltonCrescentImage from "../assets/PortfolioHamiltonCrescentImage.png";
import KeplerImage from "../assets/PortfolioKeplerImage.png";
import MasterNodedImage from "../assets/PortfolioMasterNodedImage.png";
import WatchReportImage from "../assets/PortfolioWatchReportImage.png";
import YellowCardImage from "../assets/PortfolioYellowCardImage.png";

function Portfolio() {
  const data = [
    {
      image: GIZImage,
      title: "GIZ",
      subtitle: "Featured - Family Consultancy",
    },
    {
      image: CanalPlus,
      title: "Canal Plus",
      subtitle: "Featured - Community",
    },
    {
      image: HamiltonCrescentImage,
      title: "Hamilton Crescent",
      subtitle: "Featured - cybersecurity",
    },
    {
      image: AldeliaImage,
      title: "Aldelia",
      subtitle: "Featured - Entrepreneurship",
    },
    {
      image: ATRImage,
      title: "ATR Cyber",
      subtitle: "Featured - Auto Parts Supplier",
    },
    {
      image: WatchReportImage,
      title: "Watch Rport",
      subtitle: "Featured - Beverage",
    },
    {
      image: YellowCardImage,
      title: "Yellow Card",
      subtitle: "Featured - GIS, Construction",
    },
    {
      image: MasterNodedImage,
      title: "Masternoded",
      subtitle: "Featured - Non-Profit",
    },
    {
      image: BuckheadImage,
      title: "Buckhead",
      subtitle: "Featured - Buckhead",
    },
    {
      image: KeplerImage,
      title: "Kepler",
      subtitle: "Featured - Non-profit",
    },
  ];

  const [items, setItems] = useState(data);
  const [visible, setVisible] = useState(4);

  const showMoreItems = () => {
    setVisible((prevValue) =>
      prevValue === 8 ? (prevValue = 4) : prevValue + 2
    );
  };

  return (
    <div className="text-black flex justify-center">
      <div className="w-[80%] mt-[4vw]">
        <div className="flex gap-x-[10vw] items-center">
          <h1 className="text-[3.5vw]/[4.5vw] text-left w-[75vw] font-bold">
            Explore our new recently completed projects
          </h1>
          <p className="w-[40vw] text-[1.1vw] text-left text-black float-right">
            Our portfolio boasts an impressive array of successful
            collaborations with esteemed clients. Each partnership stands as a
            testament to our commitment to excellence and innovation.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-x-[2vw] mt-[1vw]">
          {items.slice(0, visible).map((item) => {
            return (
              <div className="w-[48%] pb-[2vw] bg-white rounded-2xl mt-[2vw]">
                <div className="flex w-full h-[29vw]">
                  <img
                    src={item.image}
                    className="h-full object-cover rounded-t-2xl"></img>
                </div>
                <div className="flex justify-center">
                  <div className="w-[90%] flex justify-center justify-between items-center bg-white text-black h-[7vw]">
                    <div className="flex flex-col text-left">
                      <h2 className="text-[2vw] font-bold">{item.title}</h2>
                      <p className="text-[1.1vw]">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center w-full">
            <div
              className="border-black border-[0.1vw] rounded-[3vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out flex justify-center mt-[3vw] w-[8.5vw] h-[2.5vw] text-[1.1vw] cursor-pointer"
              onClick={showMoreItems}>
              {visible === 8 ? (
                <div className="flex items-center gap-x-[0.3vw]">
                  Collapse
                  <CgArrowLongUp className="text-[1.1vw]" />
                </div>
              ) : (
                <div className="flex items-center gap-x-[0.3vw]">
                  See More
                  <CgArrowLongDown className="text-[1.1vw]" />
                </div>
              )}
            </div>
          </div>
        </div>
        <CallToActionSection
          Content="We would love to hear more about your project"
          CallToAction="Let's Talk"
          Title="Work With Us"
        />
      </div>
    </div>
  );
}

export default Portfolio;
