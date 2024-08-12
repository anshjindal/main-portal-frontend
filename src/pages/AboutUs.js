import React from "react";
import "../styles/AboutUs.css";
import { CgArrowLongUp } from "react-icons/cg";
import AboutPageHeroImage from "../assets/about-page-hero-image.jpeg";
import { PiArrowCircleRightLight } from "react-icons/pi";
import { PiArrowCircleLeftLight } from "react-icons/pi";
import MeetTheTeamImages from "../assets/africa-block-chain-slider.png";
import HartnamtemahLogo from "../HartnamtemahLogo.svg";
import ASDICLogo from "../ASDICLogo.svg";
import CADRLogo from "../CADRLogo.svg";
import AfroTechTalkLogo from "../AfroTechTalkLogo.svg";
import KigaliRunningClub from "../assets/SVG/KigaliRunningClub.svg";
import QuoteIcon from "../QuoteIcon.svg";

function AboutUs() {
  return (
    <>
      <div className="flex justify-center h-fit">
        <div className="w-[80%] text-left mt-[3vw]">
          <h1 className="text-[4vw]/[5vw] font-extrabold">
            We provide innovative digital solutions to help your{" "}
            <span className="text-[#2703A5]">business</span> succeed.
          </h1>
          <div className="flex mt-[3vw] gap-x-[3vw] items-center">
            <div className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out rounded-full flex items-center justify-center gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer">
              See our Approach
              <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
            </div>
            <p className="w-[40%] text-[1.3vw]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${AboutPageHeroImage})` }}
            className="w-[full] h-[32vw] bg-cover mt-[3vw]"></div>
          <div className="flex justify-end">
            <div className="w-[15vw] h-[7vw] bg-[#FF9900] mt-[-4.3vw] mr-[-3vw]"></div>
          </div>
          <div className="mt-[4vw] flex justify-between ">
            <div className="flex flex-col">
              <p className="text-[1.3vw]">DIGITAL COMPANY</p>
              <h1 className="text-[4.5vw] font-extrabold">Our Story</h1>
            </div>
            <div className="flex flex-col flex w-[45vw]">
              <p className="text-[1.3vw]">
                Your brand is the most important asset in your company let our
                team of professionals help you with a good strategy took the
                runway next with an edgy collection featuring dyed denim pieces.
                The collection included patchwork denim, a trend that has
                recently exploded in younger generations. Playing on aspects of
                sustainability, the pieces appeared to be upcycled to establish
                dimension and flair. This take on grunge and streetwear took
                sustainable fashion to an entirely new level.
              </p>
              <p className="mt-[2vw] text-[1.3vw]">
                Our specialized team of researchers, strategists, designers,
                developers, and project managers work with streamlined processes
                to break through organizational roadblocks. We translate
                research into solutions, crafting thoughtful and unified brands.
              </p>
            </div>
          </div>
          <div className="flex mt-[5vw] justify-between items-center">
            <div className="w-[19vw] h-[26vw] bg-[#D9D9D9]"></div>
            <div className="w-[25vw] h-[34vw] bg-[#D9D9D9]"></div>
            <div className="flex flex-col w-[32vw] gap-y-[2vw]">
              <div className="h-[12vw] bg-[#D9D9D9]"></div>
              <div className="h-[12vw] bg-[#D9D9D9]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2703A5] mt-[5vw] h-[37vw]">
        <div className="flex justify-center">
          <div className="w-[80%] flex flex-col mt-[4vw] text-left justify-left">
            <p className="text-[1.1vw] mb-[-0.5vw] text-[#FF9900]">
              THE PEOPLE
            </p>
            <div className="flex items-center text-[4vw]/[4vw] text-left font-bold text-white">
              Meet the Team
              <div className="border-white border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] ml-[2.5vw] w-[6.2vw] h-[6.2vw] text-[1vw] text-white font-light cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out">
                View All
                <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center mt-[3vw]">
            <PiArrowCircleLeftLight className="text-[5.5vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer mr-[2vw]" />
            <div className="w-[80vw] flex justify-between items-center text-left">
              <div className="flex flex-col w-[18.5vw] shadow-black-100 shadow-lg">
                <div
                  style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
                  className="w-full h-[27vw] bg-cover bg-[center_right_-2vw]"></div>
                <div className="flex flex-col p-[1vw]">
                  <h2 className="text-[1.8vw] font-bold text-[#0A0907]">
                    Rodrique Fouafou
                  </h2>
                  <p className="text-[1.3vw] text-[#666666]">FOUNDER & CEO</p>
                </div>
              </div>
              <div className="flex flex-col w-[18.5vw] shadow-black-100 shadow-lg">
                <div
                  style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
                  className="w-full h-[27vw] bg-cover bg-[center_right_-2vw]"></div>
                <div className="flex flex-col p-[1vw]">
                  <h2 className="text-[1.8vw] font-bold text-[#0A0907]">
                    Rodrique Fouafou
                  </h2>
                  <p className="text-[1.3vw] text-[#666666]">FOUNDER & CEO</p>
                </div>
              </div>
              <div className="flex flex-col w-[18.5vw] shadow-black-100 shadow-lg">
                <div
                  style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
                  className="w-full h-[27vw] bg-cover bg-[center_right_-2vw]"></div>
                <div className="flex flex-col p-[1vw]">
                  <h2 className="text-[1.8vw] font-bold text-[#0A0907]">
                    Rodrique Fouafou
                  </h2>
                  <p className="text-[1.3vw] text-[#666666]">FOUNDER & CEO</p>
                </div>
              </div>
              <div className="flex flex-col w-[18.5vw] shadow-black-100 shadow-lg">
                <div
                  style={{ backgroundImage: `url(${MeetTheTeamImages})` }}
                  className="w-full h-[27vw] bg-cover bg-[center_right_-2vw]"></div>
                <div className="flex flex-col p-[1vw]">
                  <h2 className="text-[1.8vw] font-bold text-[#0A0907]">
                    Rodrique Fouafou
                  </h2>
                  <p className="text-[1.3vw] text-[#666666]">FOUNDER & CEO</p>
                </div>
              </div>
            </div>
            <PiArrowCircleRightLight className="text-[5.5vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer ml-[2vw]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[10vw]">
        <div className="w-[80%] flex flex-col mt-[6vw] mb-[5vw] text-left text-[1.7vw] font-bold">
          <h1>Explore some of our clients</h1>
          <div className="flex gap-x-[7vw] place-content-evenly mt-[1vw]">
            <img src={HartnamtemahLogo} className="h-[10vw] w-[10vw]"></img>
            <img src={ASDICLogo} className="h-[10vw] w-[10vw]"></img>
            <img src={CADRLogo} className="h-[10vw] w-[10vw]"></img>
            <img src={AfroTechTalkLogo} className="h-[10vw] w-[10vw]"></img>
            <img src={KigaliRunningClub} className="h-[10vw] w-[10vw]"></img>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-[5vw]">
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
                  <div className="flex flex-col">
                    <h2 className="text-[1.8vw] font-bold text-[#0A0907] mt-[1vw]">
                      Rodrique Fouafou
                    </h2>
                    <p className="text-[1.3vw] text-[#666666]">FOUNDER & CEO</p>
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
    </>
  );
}

export default AboutUs;
