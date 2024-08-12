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
    <div className="flex items-center mt-[4vw]">
      <div
        onClick={goToPrevious}
        className="flex justify-center items-center mr-[-2.2vw] text-[2vw] text-black w-[6.2vw] h-[4.5vw] rounded-full bg-[#ECECEC] cursor-pointer z-10 hover:text-[#FF9900]">
        <HiOutlineArrowSmLeft />
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-[33%] p-4">
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[25vw] text-[1.1vw] object-cover"
                />
                <div className="p-4 text-center">
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
        className="flex justify-center items-center ml-[-3vw] text-[2vw] text-black w-[6.2vw] h-[4.5vw] rounded-full bg-[#ECECEC] cursor-pointer z-10 hover:text-[#FF9900]">
        <HiOutlineArrowSmRight />
      </div>
    </div>
  );
};

export default Carousel;
