import React, { useState } from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? Math.ceil(cards.length / 3) - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === Math.ceil(cards.length / 3) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex items-center justify-center mt-[5vw]">
      <div
        onClick={goToPrevious}
        className="flex justify-center items-center text-[2vw] text-black w-[4.5vw] h-[4.5vw] rounded-full bg-[#ECECEC] cursor-pointer z-10 hover:text-[#FF9900]">
        <HiOutlineArrowSmLeft />
      </div>
      <div className="overflow-hidden w-[80%]">
        <h1 className="text-[3vw] text-left font-bold">Our Team</h1>
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-[33.3%] p-4">
              <div className="bg-white rounded-lg overflow-hidden">
                <div
                  style={{ backgroundImage: `url(${card.image})` }}
                  className="w-[full] h-[30vw] text-[1.1vw] bg-cover bg-center"></div>
                <div className="p-[1.5vw] text-center ">
                  <h2 className="font-bold text-[1.5vw]">{card.title}</h2>
                  <p className="text-gray-600 text-[1.1vw]">{card.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={goToNext}
        className="flex justify-center items-center text-[2vw] text-black w-[4.5vw] h-[4.5vw] rounded-full bg-[#ECECEC] cursor-pointer z-10 hover:text-[#FF9900]">
        <HiOutlineArrowSmRight />
      </div>
    </div>
  );
};

export default Carousel;
