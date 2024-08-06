import React, { useState, useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import AfricaBlockChainImage from "../assets/left-side-image-portfolio.jpeg";
import AfroLifestyleImage from "../assets/right-side-image-portfolio.png";

function ProjectCards() {
  const data = [
    {
      Image: AfricaBlockChainImage,
      name: "AfricaBlockChain",
      subtitle: "Featured - Blockchain, Website",
    },
    {
      Image: AfroLifestyleImage,
      name: "AfroLifestyle",
      subtitle: "Featured - eCommerce",
    },
  ];

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
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
  );
}

export default ProjectCards;
