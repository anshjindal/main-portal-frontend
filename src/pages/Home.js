import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { PiArrowCircleRightLight } from "react-icons/pi";
import { PiArrowCircleLeftLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { CgArrowLongUp } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import HomepageHeroImage from "../assets/homepage-hero-image.png";
// import HartnamtemahLogo from "../HartnamtemahLogo.svg";
// import ASDICLogo from "../ASDICLogo.svg";
// import CADRLogo from "../CADRLogo.svg";
// import AfroTechTalkLogo from "../AfroTechTalkLogo.svg";
import Aldelia from "../assets/SVG/AldeliaLogo.svg";
import ARQCH from "../assets/SVG/ARQCHLogo.svg";
import Precision from "../assets/SVG/PrecisionLogo.svg";
import Charis from "../assets/SVG/CharisLogo.svg";
import KigaliRunningClub from "../assets/SVG/KigaliRunningClub.svg";
import WhyChooseUsBackground from "../assets/WhyChooseUsBackground.png";
import DigitalMarketingImage from "../assets/what-we-do-digital-marketing.jpeg";
import SoftwareEngineeringImage from "../assets/what-we-do-software-engineering.jpeg";
import SliderData from "../helpers/RecentProjectSlider";
// import { SliderHome } from "../GraphQL/Queries";
import { gql, useQuery } from "@apollo/client";
import parse from "html-react-parser";

import OurPartners from "../components/OurPartners";

const SLIDER_HOME = gql`
  query Sliderhome {
    page(idType: URI, id: "slider-home") {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

const CLIENTS = gql`
  query clients {
    posts(where: { categoryName: "client-data" }) {
      edges {
        node {
          title
          featuredImage {
            node {
              title
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const WHY_CHOOSE_US_HOME = gql`
  query whyChooseUsHome {
    page(idType: URI, id: "why-choose-us-home") {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

const SERVICES_HOME = gql`
  query servicesHome {
    posts(where: { categoryName: "services" }, last: 2) {
      edges {
        node {
          title
          content
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const GET_PORTFOLIOS = gql`
  query GetPortfolios {
    posts(where: { categoryName: "Portfolio" }) {
      edges {
        node {
          title
          content
          image: featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    posts(where: { categoryName: "Testimonials" }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`;

const SERVICE_QUOTE = gql`
  query serviceQuote {
    post(idType: URI, id: "2024/07/08/amazing-digital-service") {
      title
      content
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
    }
  }
`;

const BOTTOM_QUOTE = gql`
  query bottomQuote {
    post(idType: URI, id: "2024/07/08/work-with-us") {
      title
      content
    }
  }
`;

function Home() {
  const { error, loading, data } = useQuery(SLIDER_HOME);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const [projSlider, updateProjSlider] = useState(0);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const services = [
    "WEB DEVELOPMENT",
    "LOGO DESIGN",
    "AI SERVICES",
    "BRAND DESIGN",
    "SOCIAL MEDIA",
    "GRAPHIC DESIGN",
    "SOFTWARE ENGINEERING",
    "CONCEPT DEVELOPMENT",
    "DIGITAL MARKETING",
    "VIDEO PRODUCTION",
    "DEVOPS",
  ];

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
      <div className="flex justify-center h-[28vw] mt-[-6vw]">
        <div className="flex justify-end w-[80%]">
          <div
            // style={{
            //   backgroundImage: `url(${parse(
            //     data.page.featuredImage.node.sourceUrl
            //   )})`,
            // }}
            style={{ backgroundImage: `url(${HomepageHeroImage})` }}
            className="w-[66vw] h-full bg-cover bg-[center_-8vw] opacity-90"></div>
        </div>
      </div>

      <OurPartners
        Logo1={ARQCH}
        Logo2={Precision}
        Logo3={Aldelia}
        Logo4={Charis}
        Logo5={KigaliRunningClub}
      />

      <div className="flex justify-center bg-[#2B00AC] gap-x-[6vw] mt-[2vw]">
        <img
          src={WhyChooseUsBackground}
          className="w-[30vw] mt-[6vw] mb-[6vw]"></img>
        <div className="flex flex-col text-left">
          <h2 className="text-[1.1vw] mb-[0.7vw] mt-[6vw] text-[#FF9900]">
            WHY CHOOSE US
          </h2>
          <h1 className="text-[4vw]/[4.5vw] text-left font-bold text-white w-[33vw]">
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
          <p className="text-[1.1vw] text-[#666666] font-normal">
            OUR SERVICES
          </p>
          <h1 className="text-[3.5vw] text-[#2E2E2E] font-bold mt-[0.2vw] mb-[1vw]">
            What we do
          </h1>

          <div className="flex justify-between items-center border-t-[0.01vw] border-[#9C9C9C] pt-[2vw] pb-[2vw]">
            <div className="flex flex-col">
              <h1 className="text-[3vw] text-[#2E2E2E] font-extrabold">
                Software <br /> Engineering
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
            <div
              style={{ backgroundImage: `url(${SoftwareEngineeringImage})` }}
              className="w-[35vw] h-[25vw] bg-cover bg-[center] flex"></div>
          </div>

          <div className="flex justify-between items-center border-t-[0.01vw] border-[#9C9C9C] pt-[2vw]">
            <div
              style={{ backgroundImage: `url(${DigitalMarketingImage})` }}
              className="w-[35vw] h-[25vw] bg-cover bg-[center_right_-0.5vw] flex"></div>
            <div className="flex flex-col">
              <h1 className="text-[3vw] text-[#2E2E2E] font-extrabold">
                Digital Marketing <br /> and Branding
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
          </div>
        </div>
      </div>

      <div className="bg-white pt-[4vw] pb-[5vw] flex justify-center">
        <div className="w-[80%] h-full text-left">
          <p className="text-[1.1vw] text-[#666666] font-normal">
            OUR SERVICES
          </p>
          <h1 className="text-[3.5vw] text-[#2E2E2E] font-bold mt-[0.2vw] mb-[4vw]">
            SERVICES SPOTLIGHT
          </h1>
          <div className="flex flex-wrap gap-y-[0.7vw] justify-center">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-full border-[0.02vw] border-[#2B00AC] p-[0.7vw] text-[#2B00AC] text-[3.1vw] cursor-pointer transition-all duration-300
            ${
              hoveredIndex === index
                ? "text-[3.5vw] border-[#FF9900] text-[#FF9900]"
                : "scale-95"
            }
            ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "scale-95 opacity-50"
                : ""
            }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#2B00AC] flex justify-center pt-[6vw] pb-[6vw]">
        <div className="w-[80%] text-left flex flex-col">
          <h1 className="text-[#FF9900] text-[1.1vw] font-normal">
            RECENT PROJECTS
          </h1>
          <div className="flex items-center justify-center">
            <PiArrowCircleLeftLight
              onClick={() =>
                updateProjSlider(projSlider === 0 ? 4 : projSlider - 1)
              }
              className="text-[5.5vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer mr-[4vw]"
            />
            <div className="flex flex-col jusitfy-center text-white text-[7.5vw] font-extrabold w-[49.5%] mr-[-8vw] z-10">
              <h1>{SliderData[projSlider].titleFirstLine}</h1>
              {SliderData[projSlider].titleSecondLine ? (
                <h1 className="w-[100%] flex justify-center mt-[-3vw] mb-[-3vw]">
                  {SliderData[projSlider].titleSecondLine}
                </h1>
              ) : (
                ""
              )}
              {SliderData[projSlider].titleThirdLine ? (
                <h1>{SliderData[projSlider].titleThirdLine}</h1>
              ) : (
                ""
              )}
            </div>
            <div
              style={{
                backgroundImage: `url(${SliderData[projSlider].thumbnail})`,
              }}
              className="w-[30vw] h-[35vw] bg-cover bg-[center] flex transition"></div>
            <PiArrowCircleRightLight
              onClick={() =>
                updateProjSlider(projSlider === 4 ? 0 : projSlider + 1)
              }
              className="text-[5.5vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer ml-[4vw]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white pt-[4vw] pb-[5vw] flex justify-center">
        <div className="w-[80%] h-full text-left">
          <p className="text-[1.1vw] text-[#666666] font-normal">
            OUR SERVICES
          </p>
          <h1 className="text-[3.5vw] text-[#2E2E2E] font-bold mt-[0.2vw] mb-[4vw]">
            Four Years of Achievements
          </h1>

          <div className="grid grid-cols-2 gap-[1vw]">
            {/* First row with 2 boxes */}
            <div className="bg-[#2B00AC] text-white h-[32vw] text-left items-center pt-[5vw] pl-[3vw] rounded-md">
              <h1 className="text-[5vw] font-extrabold">500</h1>
              <h2 className="text-[3vw]/[4vw]">
                Engineers & <br></br>Experts
              </h2>
              <div className="flex items-center mt-[2vw] w-fit text-[1.1vw] font-semibold gap-x-[0.5vw] hover:gap-x-[0.8vw] cursor-pointer">
                <p>See More</p> <FaArrowRight />
              </div>
            </div>
            <div className="border-[0.1vw] border-[#2B00AC] h-[32vw] text-left pt-[5vw] pl-[3vw] rounded-md hover:bg-[#2B00AC] hover:pt-[6vw] transition-all ease-in-out duration-300 hover:text-white">
              <h1 className="text-[5vw] font-extrabold">125</h1>
              <h2 className="text-[3vw]/[4vw]">Projects</h2>
              <div className="flex items-center mt-[2vw] w-fit text-[1.1vw] font-semibold space-x-[0.5vw] hover:space-x-[0.8vw] cursor-pointer">
                <p>See More</p> <FaArrowRight />
              </div>
            </div>
          </div>
          {/* Second row with 3 boxes */}
          <div className="col-span-3 grid grid-cols-3 gap-[1vw] mt-[1vw]">
            <div className="border-[0.1vw] border-[#2B00AC] h-[22vw] text-left pt-[3vw] pl-[2vw] space-y-[1vw] rounded-md hover:bg-[#2B00AC] hover:pt-[4vw] transition-all ease-in-out duration-300 hover:text-white">
              <h1 className="text-[4vw] font-extrabold">75</h1>
              <h2 className="text-[1.3vw]">Clients</h2>
              <div className="flex items-center pt-[1vw] w-fit text-[1.1vw] font-semibold space-x-[0.5vw] hover:space-x-[0.8vw] cursor-pointer">
                <p>See More</p> <FaArrowRight />
              </div>
            </div>
            <div className="border-[0.1vw] border-[#2B00AC] h-[22vw] text-left pt-[3vw] pl-[2vw] space-y-[1vw] rounded-md hover:bg-[#2B00AC] hover:pt-[4vw] transition-all ease-in-out duration-300 hover:text-white">
              <h1 className="text-[4vw] font-extrabold">15</h1>
              <h2 className="text-[1.3vw]">Countries</h2>
              <div className="flex items-center pt-[1vw] w-fit text-[1.1vw] font-semibold space-x-[0.5vw] hover:space-x-[0.8vw] cursor-pointer">
                <p>See More</p> <FaArrowRight />
              </div>
            </div>
            <div className="border-[0.1vw] border-[#2B00AC] h-[22vw] text-left pt-[3vw] pl-[2vw] space-y-[1vw] rounded-md hover:bg-[#2B00AC] hover:pt-[4vw] transition-all ease-in-out duration-300 hover:text-white">
              <h1 className="text-[4vw] font-extrabold">2</h1>
              <h2 className="text-[1.3vw]">New Products</h2>
              <div className="flex items-center pt-[1vw] w-fit text-[1.1vw] font-semibold space-x-[0.5vw] hover:space-x-[0.8vw] cursor-pointer">
                <p>See More</p> <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        {loading && <h3> Data is loading...</h3>}
        {error && <h3> {error.message} </h3>}
        {data && parse(data.page.content)}
      </div> */}

      <motion.div
        className="text-end font-bold text-[9vw] text-[#2B00AC] mb-4 mt-4 flex"
        initial={{ x: "100%" }}
        animate={{ x: ["-98%", "3%", "-98%"] }}
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
