import React from "react";
import { CgArrowLongUp } from "react-icons/cg";

function WorkWithUs({ Heading, CallToAction }) {
  return (
    <div className="flex text-left justify-center items-center pt-[8vw] mb-[6vw]">
      <div className="w-[62%]">
        <p className="text-[1.1vw]">WORK WITH US</p>
        <h1 className="text-[4.5vw]/[5vw] font-extrabold">{Heading}</h1>
      </div>
      <div className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out duration-300 rounded-full flex items-center justify-center mt-[1vw] ml-[6vw] gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer">
        {CallToAction}
        <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
      </div>
    </div>
  );
}

export default WorkWithUs;
