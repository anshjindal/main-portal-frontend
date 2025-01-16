import React from "react";
import ErrorImg from "../assets/SVG/abstract-shape-error.svg";
import { Link, useParams } from "react-router-dom";

const Error = () => {
  const { lang } = useParams();
  const language = lang || "en"
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <img src={ErrorImg} alt="404 Not Found" className="w-96 h-auto" />

      <h2 className="text-3xl md:text-5xl font-bold text-[#1D2445]">No Page Found!</h2>

      <div className="relative flex gap-x-2 gap-y-2 py-5 flex-col max-[450px]:w-full md:w-[500px] md:flex-row justify-center items-center">
        <p className="text-black mx-auto text-start font-inter">
          Oops! The page you're looking for doesn’t exist. Please check the URL
          or return to the homepage.
        </p>

        <div>
        <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] size-[14vw] text-[1.1vw * 10px] text-white cursor-pointer bg-[#2B00AC] hover:bg-white hover:text-black hover:border-black transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw]">
          <Link to={`/${lang}/`}>
              Return
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
