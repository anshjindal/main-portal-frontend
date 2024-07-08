import React from "react";
import "../styles/Home.css";
import { PiArrowCircleRightLight } from "react-icons/pi";
import { PiArrowCircleLeftLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { CgArrowLongUp } from "react-icons/cg";
import HomepageHeroImage from "../assets/homepage-hero-image.png";
import HartnamtemahLogo from "../HartnamtemahLogo.svg";
import ASDICLogo from "../ASDICLogo.svg";
import CADRLogo from "../CADRLogo.svg";
import AfroTechTalkLogo from "../AfroTechTalkLogo.svg";
import KigaliRunningClub from "../KigaliRunningClub.svg";
import WhyChooseUsBackground from "../assets/WhyChooseUsBackground.png";
import RecentProjBackdrop from "../assets/recent-proj-backdrop.png";

function Home() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center mt-[5vw]">
        <div className="flex justify-left w-[80%] text-left">
          <div className="flex flex-col">
            <h2 className="text-[2vw] font-light">TRANSFORM YOUR</h2>
            <div className="flex items-center gap-x-[1vw] mt-[-4vw]">
              <h1 className="text-[12vw] font-extrabold">BUSI</h1>
              <p className="w-[16vw] text-left text-[1.3vw]">
                We provide innovative digital solutions to help your business
                succeed.
              </p>
            </div>
            <div className="flex items-center mt-[-7vw]">
              <div className="flex justify-center w-[18.8vw]">
                <div className="bg-[#FF9900] rounded-full w-[5vw] h-[5vw]"></div>
              </div>
              <h1 className="text-[12vw] font-extrabold z-10">NESS</h1>
            </div>
          </div>
          <div className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out rounded-full flex items-center justify-center mt-[1vw] ml-[8vw] gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer">
            Start your Project
            <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center h-[25vw] mt-[-6vw]">
        <div className="flex justify-end w-[80%]">
          <div
            style={{ backgroundImage: `url(${HomepageHeroImage})` }}
            className="w-[66vw] h-full bg-cover bg-[center_top_-11vw] opacity-90"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%] flex flex-col mt-[6vw] mb-[5vw] text-left text-[1.7vw] font-bold">
          <h1>Some great Companies</h1>
          <div className="flex gap-x-[7vw] place-content-evenly mt-[1vw]">
            <img src={HartnamtemahLogo} className="h-[10vw] w-[10vw]"></img>
            <img src={ASDICLogo} className="h-[10vw] w-[10vw]"></img>
            <img src={CADRLogo} className="h-[10vw] w-[10vw]"></img>
            <img src={AfroTechTalkLogo} className="h-[10vw] w-[10vw]"></img>
            <img src={KigaliRunningClub} className="h-[10vw] w-[10vw]"></img>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-[#2B00AC] gap-x-[6vw]">
        <img
          src={WhyChooseUsBackground}
          className="w-[30vw] mt-[6vw] mb-[6vw]"></img>
        <div className="flex flex-col mt-[10vw] text-left ">
          <h2 className="text-[1.1vw] mb-[0.7vw] text-[#FF9900]">
            WHY CHOOSE US
          </h2>
          <h1 className="text-[4vw]/[4vw] text-left font-bold text-white w-[33vw]">
            We Empower Businesses with Innovative Digital Solutions.
          </h1>
          <h3 className="text-[1.2vw] mt-[2vw] text-white w-[19vw]">
            At Wouessi, we offer a comprehensive range of digital services to
            help businesses thrive in the online world.
          </h3>
          <div className="border-white border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] mt-[3vw] w-[6vw] h-[6vw] text-[1vw] text-white cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out">
            Details
            <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
          </div>
        </div>
      </div>

      <div className="bg-[#F4F4F4] pb-[5vw] pt-[4vw] flex justify-center">
        <div className="w-[80%] h-full text-left">
          <p className="text-[1.1vw] text-[#2B00AC] font-bold">OUR SERVICES</p>
          <h1 className="text-[4.5vw] text-[#110E0E] font-bold mt-[0.2vw] mb-[1vw]">
            What we do
          </h1>
          <div className="flex justify-between items-center border-t-[0.01vw] border-[#9C9C9C] pt-[2vw] mb-[2vw]">
            <div className="flex flex-col">
              <h1 className="text-[3.5vw] text-[#2E2E2E] font-extrabold">
                Digital <br /> Marketing
              </h1>
              <div className="flex w-[36vw] items-center">
                <div className="flex border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] items-center">
                  Propel your business forward in the online landscape.
                </div>
                <div className="w-[12vw] flex justify-end items-center">
                  <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-black cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out">
                    Details
                    <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25vw] h-[25vw] bg-[#D9D9D9]"></div>
          </div>

          <div className="flex justify-between items-center border-t-[0.01vw] border-[#9C9C9C] pt-[2vw] mb-[2vw]">
            <div className="w-[25vw] h-[25vw] bg-[#D9D9D9]"></div>
            <div className="flex flex-col">
              <h1 className="text-[3.5vw] text-[#2E2E2E] font-extrabold">
                Development
              </h1>
              <div className="flex w-[36vw] items-center">
                <div className="flex border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] items-center">
                  Dedicated to building robust, scalable, and high-performance
                  digital solutions.
                </div>
                <div className="w-[12vw] flex justify-end items-center">
                  <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-black cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out">
                    Details
                    <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center border-t-[0.01vw] border-[#9C9C9C] pt-[2vw] mb-[2vw]">
            <div className="flex flex-col">
              <h1 className="text-[3.5vw] text-[#2E2E2E] font-extrabold">
                Business
              </h1>
              <div className="flex w-[36vw] items-center">
                <div className="flex border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] items-center">
                  Our business services are tailored to support and enhance your
                  company's growth and efficiency.
                </div>
                <div className="w-[12vw] flex justify-end items-center">
                  <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-black cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out">
                    Details
                    <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25vw] h-[25vw] bg-[#D9D9D9]"></div>
          </div>

          <div className="flex justify-between items-center border-t-[0.01vw] border-[#9C9C9C] border-b-[0.01vw] pt-[2vw] pb-[2vw]">
            <div className="w-[25vw] h-[25vw] bg-[#D9D9D9]"></div>
            <div className="flex flex-col">
              <h1 className="text-[3.5vw] text-[#2E2E2E] font-extrabold">
                Design
              </h1>
              <div className="flex w-[36vw] items-center">
                <div className="flex border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] items-center">
                  Crafted to elevate your brand's visual identity and user
                  experience.
                </div>
                <div className="w-[12vw] flex justify-end items-center">
                  <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[6vw] h-[6vw] text-[1vw] text-black cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition ease-in-out">
                    Details
                    <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2B00AC] flex justify-center pt-[6vw] pb-[6vw]">
        <div className="w-[80%] text-left flex flex-col">
          <h1 className="text-[#FF9900] text-[1.6vw] font-bold">
            RECENT PROJECTS
          </h1>
          <div className="flex items-center justify-center">
            <PiArrowCircleLeftLight className="text-[5.5vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer mr-[4vw]" />
            <div className="flex flex-col jusitfy-center text-white text-[7.5vw] font-extrabold w-[49.5%] mr-[-8vw] z-10">
              <h1>AFRICAN</h1>
              <h1 className="w-[100%] flex justify-end mt-[-3vw] mb-[-3vw]">
                BLOCK
              </h1>
              <h1>CHAIN</h1>
            </div>
            <div
              style={{ backgroundImage: `url(${RecentProjBackdrop})` }}
              className="w-[30vw] h-[35vw] bg-cover bg-[center_right_-2vw] flex"></div>
            <PiArrowCircleRightLight className="text-[5.5vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer ml-[4vw]" />
          </div>
          <div className="flex justify-center">
            <p className="w-[26vw] text-left text-[#C8CFD5] text-[1.4vw] mt-[5vw]">
              We are web designers, developers, project managers, and digital
              solutions using the latest trends and technologies.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        className="text-end font-bold text-[10vw] text-[#2B00AC] mb-4 mt-4 flex"
        initial={{ x: "100%" }}
        animate={{ x: ["-90%", "0%", "-90%"] }}
        transition={{
          repeat: Infinity,
          type: "tween",
          duration: 20,
          repeatType: "loop",
          ease: "linear",
        }}>
        Digital<span className="text-[#FF9900]"> - </span>Design
        <span className="text-[#FF9900]"> - </span>Development
        <span className="text-[#FF9900]"> - </span>Technology
      </motion.div>
    </div>
  );
}

export default Home;
