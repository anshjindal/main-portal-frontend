import React from "react";
import AboutLeftImage from "../assets/about-left-side-image.jpg";

function GetInTouch() {
  return (
    <div className="flex justify-center mt-[5vw]">
      <div
        style={{ backgroundImage: `url(${AboutLeftImage})` }}
        className="w-[65vw] h-[20vw] rounded-lg bg-cover bg-[center_-6vw]">
        <div className="h-full bg-[#2B00AC]/60 rounded-lg flex justify-center items-center">
          <div className="h-[8.5vw] w-[35vw] flex flex-col items-center mt-[2vw]">
            <p className="text-[2vw] font-bold text-white">
              Driving Growth in the Digital Age
            </p>
            <div className="mt-[2vw] bg-[#FF9900] text-white rounded w-[8vw] h-[3vw] text-[1.1vw] flex justify-center items-center">
              Get in touch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
