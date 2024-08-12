import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";

function Accordion({ title, InnerTextData }) {
  const [accordionOpen, setAccordionOpen] = useState(true);

  const accordionToggle = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="text-left pb-[1.5vw]">
      <div className="flex items-center gap-x-[1.5vw] w-fit">
        <IoMdArrowDropright
          onClick={accordionToggle}
          className={`text-[2vw]   ${
            accordionOpen
              ? "cursor-pointer"
              : "transition-all duration-300 rotate-[90deg] cursor-pointer"
          }`}
        />
        <div>
          <h2 className="text-[3.8vw] font-bold">{title}</h2>
          <div className="border-b-[0.1vw] border-[#666666] w-[10vw]"></div>
        </div>
      </div>
      {InnerTextData.map((items) => {
        return (
          <div
            className={`transition-all duration-200 ease-linear pl-[5vw] ${
              accordionOpen ? `opacity-0 h-0` : `opacity-100 h-full pt-[1vw]`
            }`}>
            <h3 className="text-[2.8vw] font-bold">{items.innerTitle}</h3>
            <div className="flex gap-x-[2vw]">
              {items.innerTitle ? (
                <div className="w-[7vw] border-t-[0.1vw] border-[#666666]"></div>
              ) : (
                ""
              )}
              <p className="text-[1vw] w-[90%]">{items.innerText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
