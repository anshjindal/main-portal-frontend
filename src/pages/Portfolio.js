import React from "react";
import "../styles/Portfolio.css";
import GetInTouch from "../components/GetInTouch";
import PortfolioBackdrop from "../assets/portfolio-backdrop.jpeg";
import AllTabImage1 from "../assets/all-tab-image1.png";
import AllTabImage2 from "../assets/all-tab-image2.png";
import RightSideImagePortfolio from "../assets/right-side-image-portfolio.png";
import AllTabImage4 from "../assets/all-tab-image4.png";
import HeroBanner from "../components/HeroBanner";

function Portfolio() {
  return (
    <div className="mb-[5vw]">
      <HeroBanner title={"Portfolio"} image={PortfolioBackdrop} />
      <h2 className="text-[1.8vw] font-bold text-[#2B00AC] mt-[5vw]">
        \ Portfolio \
      </h2>
      <h1 className="text-[#0E1F51] text-[3vw] font-bold mt-[-0.5vw] mb-[3vw]">
        Our Work
      </h1>
      <div className="h-[3.5vw] flex justify-center our-work-menu">
        <p className="rounded-l-[10px]">ALL</p>
        <p>LIFE</p>
        <p>MOMENTS</p>
        <p>NATURE</p>
        <p>STORIES</p>
        <p className="rounded-r-[10px]">TRAVEL</p>
      </div>
      <div className="h-fit flex flex-col items-center mt-[4vw] gap-y-[2vw]">
        <div className="w-[80vw] h-[26vw] flex justify-center gap-x-[2vw]">
          <img src={AllTabImage1} className="h-full w-[50vw] rounded-lg"></img>
          <img
            src={AllTabImage2}
            className="h-full w-[25vw] rounded-lg object-cover"></img>
        </div>
        <div className="w-[80vw] h-[26vw] flex justify-center gap-x-[2vw]">
          <img
            src={RightSideImagePortfolio}
            className="h-full w-[25vw] rounded-lg object-cover"></img>
          <img
            src={AllTabImage4}
            className="h-full w-[50vw] rounded-lg object-cover"></img>
        </div>
        <button className="w-[9vw] h-[3vw] rounded-md bg-[#2B00AC] text-[1.1vw] text-white">
          View More
        </button>
      </div>
      <GetInTouch />
    </div>
  );
}

export default Portfolio;
