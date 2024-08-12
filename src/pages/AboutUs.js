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
import OurMissionTopImage from "../assets/OurMissionTopImage.png";
import OurMissionSideImage from "../assets/OurMissionSideImage.png";
import Carousel from "../components/OurTeamCarousel";

function AboutUs() {
  const cards = [
    {
      image: { OurMissionSideImage },
      title: "Rodrigue Fouafou",
      subtitle: "CEO",
    },
    {
      image: { OurMissionSideImage },
      title: "Rimjhim Rosalin",
      subtitle: "COO",
    },
    {
      image: { OurMissionSideImage },
      title: "Strive Mazunga",
      subtitle: "CTO",
    },
    {
      image: { OurMissionSideImage },
      title: "Reginald Nugent",
      subtitle: "CFO",
    },
    {
      image: { OurMissionSideImage },
      title: "Fanny Ene",
      subtitle: "VP of SALES",
    },
    {
      image: { OurMissionSideImage },
      title: "Nelson Nwankwo",
      subtitle: "Director of Digital services",
    },
  ];

  return (
    <>
      <div className="flex justify-center h-fit">
        <div className="w-[80%] text-left mt-[3vw]">
          <h1 className="text-[4vw]/[5vw] font-extrabold w-[75%]">
            Powerful Digital Solutions for{" "}
            <span className="text-[#2703A5]">Business Growth</span>
          </h1>
          <div className="flex mt-[3vw] items-center justify-between">
            <p className="w-[65%] text-[1.3vw]">
              Wouessi Inc. stands as a beacon of innovation and excellence in
              the heart of Toronto, Canada, leading in revolutionizing the
              digital landscape worldwide. With a steadfast commitment to
              pushing boundaries and delivering unparalleled solutions, Wouessi
              offers a comprehensive suite of cutting-edge digital services
              tailored to meet the diverse needs of businesses across the globe.
            </p>
            <div className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out rounded-full flex items-center justify-center gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer">
              Our Approach
              <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${AboutPageHeroImage})` }}
            className="w-[full] h-[32vw] bg-cover mt-[3vw]"></div>
          <div className="flex justify-end">
            <div className="w-[15vw] h-[7vw] bg-[#FF9900] mt-[-4.3vw] mr-[-3vw]"></div>
          </div>
          <div className="mt-[4vw] flex justify-between">
            <div className="flex flex-col gap-y-[1.5vw] w-[45%]">
              <p className="text-[1.3vw] text-[#666666]">Our Mission</p>
              <h1 className="text-[3.8vw]/[5.2vw] font-normal">
                Empowering Businesses with Bespoke Digital Strategies for Global
                Success
              </h1>
              <p className="mt-[2vw] text-[1.3vw] font-[bold] text-[#666666]">
                Our Vision
              </p>
              <p className="text-[1.3vw] border-l-[0.1vw] border-[#9C9C9C] pl-[1vw]">
                At Wouessi, we transcend geographical boundaries to envision a
                world where digital innovation knows no limits. Our vision is to
                emerge as a global leader, spearheading groundbreaking
                initiatives that redefine collaboration and drive transformative
                change on a worldwide scale.
              </p>
            </div>
            <div className="flex flex-col flex w-[33vw]">
              <div
                style={{ backgroundImage: `url(${OurMissionTopImage})` }}
                className="w-full h-[15vw] bg-center bg-cover"></div>
              <div className="flex">
                <div className="w-[23vw] h-[30vw] mt-[-3vw] bg-[#F4F4F4]">
                  <p className="mt-[2vw] mb-[2vw] text-[1.3vw] font-[bold] text-[#666666]">
                    Our Story
                  </p>
                  <p className="text-[1.3vw] border-l-[0.1vw] border-[#9C9C9C] pl-[1vw] pr-[1.2vw]">
                    Beyond our digital endeavors, Wouessi Digital is deeply
                    committed to community involvement and social
                    responsibility. Under the leadership of Mr. Rodrigue
                    Fouafou, our founder, we strive to drive positive change and
                    create
                  </p>
                </div>
                <div
                  style={{
                    backgroundImage: `url(${OurMissionSideImage})`,
                  }}
                  className="w-[15vw] h-[30vw] bg-cover bg-center"></div>
              </div>
            </div>
          </div>

          <Carousel cards={cards} />
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
        <div className="w-[80%] flex flex-col mt-[10vw] mb-[5vw] text-left text-[1.7vw] font-bold">
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
