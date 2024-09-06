import React, { useState } from "react";
import TestimonyData from "../helpers/ClientTestimonyData";
import { PiArrowCircleRightLight } from "react-icons/pi";
import { PiArrowCircleLeftLight } from "react-icons/pi";
import QuoteIcon from "../QuoteIcon.svg";

function ClientTestimonySlider() {
  const [testimonySlider, updateTestimonySlider] = useState(0);
  return (
    <div className="flex justify-center bg-white">
      <div className="w-[80%] max-[450px]:mb-[4vw]">
        <h1 className="w-full text-left text-[#666666] mt-[4vw] max-[450px]:text-[3vw] max-[450px]:mt-[8vw]">
          Client Testimony
        </h1>
        <div className="flex justify-center gap-x-[4vw] mt-[3vw] mb-[3vw]">
          <img
            src={QuoteIcon}
            className="w-[6vw] h-[6vw] mb-[1vw] max-[450px]:hidden"></img>
          <div className="flex justify-center items-center text-left w-[50vw] h-fit mt-[4vw] bg-[#F4F4F4] max-[450px]:w-full">
            <div className="w-fit h-fit">
              <div className="p-[3vw] text-center max-[450px]:p-[5vw]">
                <p className="text-[1.5vw] mb-[3vw] text-[#A7A9AA] max-[450px]:text-[3vw]">
                  {TestimonyData[testimonySlider].comment}
                </p>
                <h2 className="text-[1.8vw] font-bold text-[#0A0907] max-[450px]:text-[5vw]">
                  {TestimonyData[testimonySlider].name}
                </h2>
                <div className="flex flex-wrap space-x-[0.5vw] justify-center text-[1.5vw] text-[#666666] max-[450px]:text-[3vw]">
                  <p>{TestimonyData[testimonySlider].role}</p>
                  <p className="w-fit">
                    {TestimonyData[testimonySlider].location}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-x-[0.5vw] w-[full] p-[3vw] bg-white">
                <PiArrowCircleLeftLight
                  onClick={() =>
                    updateTestimonySlider(
                      testimonySlider === 0 ? 4 : testimonySlider - 1
                    )
                  }
                  className="flex justify-center items-center text-[2vw] text-[#C8CFD5] w-[6.5vw] h-[6.5vw] ml-[1vw] cursor-pointer z-10 hover:text-[#FF9900] max-[450px]:w-[10vw] max-[450px]:h-[10vw]"
                />
                <PiArrowCircleRightLight
                  onClick={() =>
                    updateTestimonySlider(
                      testimonySlider === 4 ? 0 : testimonySlider + 1
                    )
                  }
                  className="flex justify-center items-center text-[2vw] text-[#C8CFD5] w-[6.5vw] h-[6.5vw] cursor-pointer z-10 hover:text-[#FF9900] max-[450px]:w-[10vw] max-[450px]:h-[10vw]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonySlider;
