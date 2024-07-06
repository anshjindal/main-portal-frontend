import React from "react";
import "../styles/Services.css";
import MeetTheTeamImages from "../assets/recent-proj-backdrop.png";
import { CgArrowLongUp } from "react-icons/cg";

function Services() {
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
                <h1 className="text-[4vw]/[4vw] font-bold">
                  Website Development
                </h1>
                <div className="w-[12vw] flex justify-end items-center">
                  <div className="border-white border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-white cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out">
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

        <div className="flex items-center justify-center mt-[5vw]">
          <div className="flex justify-center items-center w-[44vw] h-[28vw] bg-white mr-[-6vw] z-10">
            <div className="w-[80%] text-left text-[black]">
              <div className="flex">
                <h1 className="text-[4vw]/[4vw] font-bold">Brand Design</h1>
                <div className="w-[12vw] flex justify-end items-center">
                  <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-[black] cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out">
                    Details
                    <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-[3vw]">
                <div className="border-t-[0.1vw] border-black w-[5vw] h-[5vw]"></div>
                <div className="flex flex-col w-[80%] mt-[-1vw]">
                  <p className="text-[1.1vw]">
                    We offer a full suite of branding solutions to help our
                    clients build, launch, and maintain their brands. We design
                    attractive brand marketing materials and perform consistent
                    brand marketing activities. 
                  </p>
                  <p className="mt-[2.5vw] text-[1vw] text-[#757575]">
                    LOGO DESIGN &#x2022; IDENTITY DESIGN &#x2022; MARKETING
                    ASSETS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
            className="w-[30vw] h-[40vw] bg-cover bg-[center_right_-2vw]"></div>
        </div>

        <div className="flex items-center justify-center mt-[5vw]">
          <div className="w-[6.5vw] h-[28vw] bg-[#2B00AC] mt-[-5vw]"></div>
          <div
            style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
            className="w-[30vw] h-[40vw] bg-cover bg-[center_right_-2vw]"></div>
          <div className="flex justify-center items-center w-[44vw] h-[28vw] bg-[#2B00AC] mt-[-5vw]">
            <div className="w-[80%] text-left text-white">
              <div className="flex">
                <h1 className="text-[4vw]/[4vw] font-bold">
                  Digital Marketing
                </h1>
                <div className="w-[12vw] flex justify-end items-center">
                  <div className="border-white border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-white cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out">
                    Details
                    <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-[3vw]">
                <div className="border-t-[0.1vw] border-white w-[5vw] h-[5vw]"></div>
                <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                  Our multi-talented digital marketing team uses the best
                  content writing practices to develop quality content that sets
                  the right tone for your audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-[5vw]">
          <div className="flex justify-center items-center w-[44vw] h-[28vw] bg-white mr-[-6vw] z-10">
            <div className="w-[80%] text-left text-[black]">
              <div className="flex">
                <h1 className="text-[4vw]/[4vw] font-bold">Video Production</h1>
                <div className="w-[12vw] flex justify-end items-center">
                  <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-[black] cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out">
                    Details
                    <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-[3vw]">
                <div className="border-t-[0.1vw] border-black w-[5vw] h-[5vw]"></div>
                <div className="flex flex-col w-[80%] mt-[-1vw]">
                  <p className="text-[1.1vw]">
                    Video marketing is the latest and top trend in digital
                    marketing. It is a cost-effective method of communicating
                    with the audience.
                  </p>
                  <p className="mt-[2.5vw] text-[1vw] text-[#757575]">
                    PROCESS &#x2022; CREATIVITY &#x2022; EXPERIENCE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
            className="w-[30vw] h-[40vw] bg-cover bg-[center_right_-2vw]"></div>
        </div>

        <div className="flex items-center justify-center mt-[5vw]">
          <div className="w-[6.5vw] h-[28vw] bg-[#2B00AC] mt-[-5vw]"></div>
          <div
            style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
            className="w-[30vw] h-[40vw] bg-cover bg-[center_right_-2vw]"></div>
          <div className="flex justify-center items-center w-[44vw] h-[28vw] bg-[#2B00AC] mt-[-5vw]">
            <div className="w-[80%] text-left text-white">
              <div className="flex">
                <h1 className="text-[4vw]/[4vw] font-bold">
                  Search Engine Optimization
                </h1>
                <div className="w-[12vw] flex justify-end items-center">
                  <div className="border-white border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-white cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out">
                    Details
                    <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-[3vw]">
                <div className="border-t-[0.1vw] border-white w-[5vw] h-[5vw]"></div>
                <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                  Our multi-talented digital marketing team uses the best
                  content writing practices to develop quality content that sets
                  the right tone for your audience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-[5vw]">
          <div className="flex justify-center items-center w-[44vw] h-[28vw] bg-white mr-[-6vw] z-10">
            <div className="w-[80%] text-left text-[black]">
              <div className="flex">
                <h1 className="text-[4vw]/[4vw] font-bold">Video Production</h1>
                <div className="w-[12vw] flex justify-end items-center">
                  <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-[black] cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out">
                    Details
                    <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-[3vw]">
                <div className="border-t-[0.1vw] border-black w-[5vw] h-[5vw]"></div>
                <div className="flex flex-col w-[80%] mt-[-1vw]">
                  <p className="text-[1.1vw]">
                    Video marketing is the latest and top trend in digital
                    marketing. It is a cost-effective method of communicating
                    with the audience.
                  </p>
                  <p className="mt-[2.5vw] text-[1vw] text-[#757575]">
                    PROCESS &#x2022; CREATIVITY &#x2022; EXPERIENCE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
            className="w-[30vw] h-[40vw] bg-cover bg-[center_right_-2vw]"></div>
        </div>
      </div>
    </div>
  );
}

export default Services;
