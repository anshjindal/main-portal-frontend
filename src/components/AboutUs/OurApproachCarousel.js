import React, { useState } from "react";
import content from "../../content/AboutUs/OurApproach";
import contenttitle from "../../content/AboutUs/OurApproachTitle.json"; 

import {
  PiArrowCircleLeftLight,
  PiArrowCircleRightLight,
} from "react-icons/pi";

function OurApproachCarousel({lang}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const ContentTitle = contenttitle[lang];
  const Content = content[lang];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? Math.ceil(Content.length / 3) - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide =
      currentIndex === Math.ceil(Content.length / 3) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="overflow-hidden pl-[8vw] mt-[3vw]">
      <h1 className="text-[3vw] text-left pl-[1vw] font-bold max-[450px]:text-[7vw]">
        {ContentTitle.title}
      </h1>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 99}%)` }}
      >
        {Content.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-[33%] p-[1.3vw]">
            <div className="rounded-lg overflow-hidden">
              <div
                style={{ backgroundImage: `url(${card.image})` }}
                className="w-[full] h-[30vw] bg-cover bg-center"
              >
                <div
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={`${
                    hoveredIndex === index &&
                    card.hoverTitle &&
                    card.hoverContent
                      ? "w-full h-full bg-[#2B00AC] p-[2vw] text-white text-left"
                      : "flex items-end text-left pl-[0.4vw] text-white bg-gray-500/35 w-full h-full font-bold text-[2vw]"
                  } transition duration-300 ease-out`}
                >
                  {hoveredIndex === index ? (
                    <div>
                      <h1 className="text-[1.5vw] font-bold">
                        {card.hoverTitle}
                      </h1>
                      <p className="text-[1.1vw] mt-[1vw]">
                        {card.hoverContent}
                      </p>
                    </div>
                  ) : (
                    <h2 className="font-bold text-white text-[2vw] text-left pl-[0.4vw]">
                      {card.title}
                    </h2>
                  )}
                </div>
              </div>
              <h2 className="font-bold text-[2vw] text-left pl-[0.4vw]">
                {card.subtitle}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-x-[0.5vw] w-[full]">
        <PiArrowCircleLeftLight
          onClick={goToPrevious}
          className="flex justify-center items-center text-[2vw] text-[#C8CFD5] w-[4.5vw] h-[4.5vw] ml-[1vw] cursor-pointer z-10 hover:text-[#FF9900]"
        />

        <PiArrowCircleRightLight
          onClick={goToNext}
          className="flex justify-center items-center text-[2vw] text-[#C8CFD5] w-[4.5vw] h-[4.5vw] cursor-pointer z-10 hover:text-[#FF9900]"
        />
      </div>
    </div>
  );
}

export default OurApproachCarousel;
