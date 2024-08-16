import React from "react";
import "../styles/Pricing.css";
import MeetTheTeamImages from "../assets/africa-block-chain-slider.png";
import { CgArrowLongUp } from "react-icons/cg";
import { PiArrowCircleRightLight } from "react-icons/pi";
import { PiArrowCircleLeftLight } from "react-icons/pi";
import QuoteIcon from "../QuoteIcon.svg";

function Products() {
  return (
    <div className="flex justify-center mt-[5vw] mb-[5vw]">
      <div className="w-[80%]">
        <div className="flex items-center justify-center">
          <div className="w-[6.5vw] h-[28vw] bg-[#2B00AC] mt-[-5vw]"></div>
          <div
            style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
            className="w-[30vw] h-[40vw] bg-cover bg-[center_right_-2vw]"></div>
          <div className="flex justify-center items-center w-[44vw] h-[28vw] bg-[#2B00AC] mt-[-5vw]">
            <div className="w-[80%] text-left text-white">
              <div className="flex">
                <h1 className="text-[4vw]/[4vw] font-bold">Products</h1>
                <div className="w-[12vw] flex justify-end items-center">
                  <div className="border-white border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-white cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out duration-300">
                    Details
                    <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-[3vw]">
                <div className="border-t-[0.1vw] border-white w-[5vw] h-[5vw]"></div>
                <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                  Our specialized team of researchers, strategists, designers,
                  developers, and project managers work with streamlined
                  processes to break through organizational roadblocks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-left items-center border-t-[0.01vw] border-[#9C9C9C] pt-[2vw] mt-[5vw] mb-[2vw]">
          <div className="w-[35vw] h-[30vw] bg-[#D9D9D9]"></div>
          <div className="flex flex-col gap-y-[2vw]">
            <h1 className="text-[3.5vw] text-[#2E2E2E] font-extrabold">
              BantuEd
            </h1>
            <div className="flex w-[36vw] items-center">
              <div className="flex border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] items-center">
                BantuEd leads the way in revolutionizing education through
                advanced technologies and tailored solutions.
              </div>
              <div className="w-[12vw] flex justify-end items-center">
                <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-black cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out duration-300">
                  Details
                  <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-left items-center border-t-[0.01vw] border-[#9C9C9C] border-b-[0.01vw] pb-[2vw] pt-[2vw] mb-[2vw]">
          <div className="flex flex-col gap-y-[2vw]">
            <h1 className="text-[3.5vw] text-[#2E2E2E] font-extrabold">
              Egolu
            </h1>
            <div className="flex w-[36vw] items-center">
              <div className="flex border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] items-center">
                EGOLU App is a groundbreaking solution revolutionizing payroll
                and human resources management.
              </div>
              <div className="w-[12vw] flex justify-end items-center">
                <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-black cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out duration-300">
                  Details
                  <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35vw] h-[30vw] bg-[#D9D9D9]"></div>
        </div>
        <div className="flex justify-center mb-[5vw] mt-[6vw]">
          <div className="flex justify-center w-[80%] items-center">
            <div
              style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
              className="w-[30vw] h-[40vw] bg-cover bg-[center_right_-2vw]"></div>
            <div className="flex flex-col">
              <img src={QuoteIcon} className="w-[6vw] h-[6vw] ml-[2vw]"></img>
              <div className="flex justify-center items-center text-left w-[35vw] h-[27vw] bg-white ml-[-4vw]">
                <div className="p-[2vw]">
                  <h1 className="text-[3vw]/[3vw] font-bold">
                    Amazing digital service
                  </h1>
                  <p className="text-[1.1vw] mt-[1.5vw]">
                    Our specialized team of researchers, strategists, designers,
                    developers, and project managers work with streamlined
                    processes to break through organizational roadblocks. We
                    translate research into solutions, crafting thoughtful and
                    unified brands.
                  </p>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-y-[2vw]">
                      <h2 className="text-[1.8vw] font-bold text-[#0A0907] mt-[1vw]">
                        Rodrique Fouafou
                      </h2>
                      <p className="text-[1.3vw] text-[#666666]">
                        FOUNDER & CEO
                      </p>
                    </div>
                    <div className="flex pt-[1vw]">
                      <PiArrowCircleLeftLight className="text-[5.5vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer" />
                      <PiArrowCircleRightLight className="text-[5.5vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
