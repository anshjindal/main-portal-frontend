import React from "react";

function OurPartners({ Logo1, Logo2, Logo3, Logo4, Logo5 }) {
  return (
    <div className="flex justify-center">
      <div className="w-[80%] flex flex-col mt-[6vw] text-left text-[2.5vw] font-bold max-[450px]:text-[4vw] max-[450px]:h-[16vw] max-[450px]:w-[90%] max-[450px]:mb-[5vw]">
        <h1>Our Partners</h1>
        <div className="flex w-full justify-between items-center mt-[-1vw]">
          <img
            src={Logo1}
            className="h-[12vw] w-[12vw] max-[450px]:h-[14vw] max-[450px]:w-[14vw]"></img>
          <img
            src={Logo2}
            className="h-[10vw] w-[10vw] max-[450px]:h-[14vw] max-[450px]:w-[14vw]"></img>
          <img
            src={Logo3}
            className="h-[10vw] w-[10vw] max-[450px]:h-[14vw] max-[450px]:w-[14vw]"></img>
          <img
            src={Logo4}
            className="h-[12vw] w-[12vw] max-[450px]:h-[14vw] max-[450px]:w-[14vw]"></img>
          <img
            src={Logo5}
            className="h-[10vw] w-[10vw] max-[450px]:h-[14vw] max-[450px]:w-[14vw]"></img>
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
