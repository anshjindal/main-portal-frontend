import React from "react";
import NewsletterBanner from "../assets/NewsletterBanner.jpeg";
import { FaArrowRight } from "react-icons/fa6";

function NewsletterRegister() {
  return (
    <div className="flex items-center justify-center mb-[5vw] mt-[10vw]">
      <div className="w-[6.5vw] h-[32vw] bg-[#2B00AC] mt-[-3vw]"></div>
      <div
        style={{ backgroundImage: `url(${NewsletterBanner})` }}
        className="w-[30vw] h-[40vw] bg-cover bg-[center]"></div>
      <div>
        <div className="flex justify-center items-center w-[44vw] h-[32vw] bg-[#2B00AC] mt-[-3vw]">
          <div className="w-[85%] text-left text-white">
            <div className="flex">
              <h1 className="text-[3.5vw]/[4.2vw] font-bold">
                Exclusive, be the first to know
              </h1>
              <div className="w-[12vw] flex justify-end items-center"></div>
            </div>
            <p className="text-[1.1vw] w-[80%] mt-[2vw] mb-[2vw]">
              Enter your email to subscribe to our newsletter for our lastest
              news, updates and offers.
            </p>
            <form>
              <div className="flex items-center border-b-[0.2vw] border-[#B8B8B8]">
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  className="bg-[#2B00AC] h-[3.5vw] w-full text-[1.2vw] focus-visible:outline-none placeholder:font-normal placeholder:text-white"></input>
                <button
                  type="submit"
                  className="w-[3vw] text-[1.5vw] hover:pl-[1vw] hover:text-[#44c644] cursor-pointer transition-all ease-in-out duration-300">
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterRegister;
