import React from "react";
import { CgArrowLongUp } from "react-icons/cg";
import { Link } from "react-router-dom";
import content from "../../content/Reusable/CallToActionSection.json";

function CallToActionSection({ CallToAction, lang, RedirectTo = "ContactUs" }) {
  const Content = content[CallToAction][lang];

  return (
    <div className="flex text-left justify-center items-center pt-[5vw] pb-[5vw]">
      <div className="w-[58%]">
        <p className="text-[1.1vw] text-[#666666] max-[450px]:text-[2.5vw] font-medium">
          {Content.title}
        </p>
        <h1 className="text-[4.5vw]/[5vw] font-bold max-[450px]:text-[7vw]/[7.5vw] max-[450px]:mt-[2vw]">
          {Content.content}
        </h1>
      </div>
      <Link to={`/${lang}/${RedirectTo}`}>
        <div className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out duration-300 rounded-full flex items-center justify-center mt-[1vw] ml-[6vw] gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw]">
          {Content.callToAction}
          <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
        </div>
      </Link>
    </div>
  );
}

export default CallToActionSection;
