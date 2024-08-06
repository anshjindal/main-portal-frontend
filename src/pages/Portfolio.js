import React, { useState, useEffect } from "react";
import "../styles/Portfolio.css";
import { BsArrowRightShort } from "react-icons/bs";
import AfricaBlockChainImage from "../assets/left-side-image-portfolio.jpeg";
import AfroLifestyleImage from "../assets/right-side-image-portfolio.png";
import { CgArrowLongDown, CgArrowLongUp } from "react-icons/cg";

function Portfolio() {
  const data = [
    {
      image: AfricaBlockChainImage,
      title: "AfricaBlockChain",
      subtitle: "Featured - Blockchain, Website",
    },
    {
      image: AfroLifestyleImage,
      title: "AfroLifestyle",
      subtitle: "Featured - eCommerce",
    },
    {
      image: AfroLifestyleImage,
      title: "AfroLifestyle",
      subtitle: "Featured - eCommerce",
    },
    {
      image: AfricaBlockChainImage,
      title: "AfricaBlockChain",
      subtitle: "Featured - Blockchain, Website",
    },
    {
      image: AfricaBlockChainImage,
      title: "AfricaBlockChain",
      subtitle: "Featured - Blockchain, Website",
    },
    {
      image: AfroLifestyleImage,
      title: "AfroLifestyle",
      subtitle: "Featured - eCommerce",
    },
    {
      image: AfroLifestyleImage,
      title: "AfroLifestyle",
      subtitle: "Featured - eCommerce",
    },
    {
      image: AfricaBlockChainImage,
      title: "AfricaBlockChain",
      subtitle: "Featured - Blockchain, Website",
    },
  ];

  const [items, setItems] = useState(data);
  const [visible, setVisible] = useState(2);

  const showMoreItems = () => {
    setVisible((prevValue) =>
      prevValue === 8 ? (prevValue = 2) : prevValue + 2
    );
  };

  return (
    <div className="text-black flex justify-center">
      <div className="w-[80%] mt-[4vw]">
        <div className="flex gap-x-[10vw]">
          <h1 className="text-[4vw]/[4vw] text-left w-[55vw] font-bold">
            Explore our new recently completed projects.
          </h1>
          <p className="w-[24vw] text-[1.1vw] text-left text-black float-right">
            Our portfolio boasts an impressive array of successful
            collaborations with esteemed clients. Each partnership stands as a
            testament to our commitment to excellence and innovation.
          </p>
        </div>
        <div className="w-1/6 mt-[2vw] border border-slate-600"></div>
        <div className="flex flex-wrap justify-between gap-x-[2vw] mt-[1vw] mb-[5vw]">
          {items.slice(0, visible).map((item) => {
            return (
              <div className="w-[39vw] pb-[2vw] bg-white rounded-2xl mt-[2vw]">
                <div className="flex w-full h-[29vw]">
                  <img
                    src={item.image}
                    className="h-full object-cover rounded-t-2xl"></img>
                </div>
                <div className="flex justify-center gap-x-[8vw] items-center bg-white text-black h-[7vw]">
                  <div className="flex flex-col text-left">
                    <h2 className="text-[2vw] font-bold">{item.title}</h2>
                    <p className="text-[1.1vw]">{item.subtitle}</p>
                  </div>
                  <div className="w-[11vw] h-[3.5vw] rounded-md bg-[#FF9900] text-[1.1vw] flex items-center justify-center cursor-pointer">
                    See Project
                    <BsArrowRightShort className="text-[2vw]" />
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
      </div>
    </div>
  );
}

export default Portfolio;
