import React from "react";
import "../styles/Home.css";
import customerPictures from "../assets/testimonials-customer.png";
import WhatWeDo from "../assets/what-we-do-homepage.jpeg";
import LeftSideImagePortfolio from "../assets/left-side-image-portfolio.jpeg";
import RightSideImagePortfolio from "../assets/right-side-image-portfolio.png";
import { FaChartLine } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { FaTags } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { PiArrowCircleRightLight } from "react-icons/pi";
import { PiArrowCircleLeftLight } from "react-icons/pi";
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
import { CgArrowLongUp } from "react-icons/cg";
import HomepageHeroImage from "../assets/homepage-hero-image.png";
import HartnamtemahLogo from "../HartnamtemahLogo.svg";
import ASDICLogo from "../ASDICLogo.svg";
import CADRLogo from "../CADRLogo.svg";
import AfroTechTalkLogo from "../AfroTechTalkLogo.svg";
import KigaliRunningClub from "../KigaliRunningClub.svg";
import WhyChooseUsBackground from "../assets/WhyChooseUsBackground.png";

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
          <div className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white rounded-full flex items-center justify-center mt-[1vw] ml-[8vw] gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer">
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
        <div className="flex flex-col mt-[4vw] text-left mt-[10vw]">
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
          <div className="border-white border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] mt-[3vw] w-[6vw] h-[6vw] text-[1vw] text-white cursor-pointer hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900]">
            Details
            <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
          </div>
        </div>
      </div>

      {/* <section>
        <div className="text-start px-3 sm:px-6 lg:px-36 gap-12 py-20">
          <div className="md:flex items-center">
            <div className="lg:w-3/4 capitalize space-y-6">
              <p className="font-bold text-[#2B00AC]">why choose us</p>
              <h1 className="capitalize text-4xl font-bold">
                empowering businesses with{" "}
                <span className="text-[#FF9900]">innovative</span>
                digital solutions
              </h1>
            </div>
            <div className="pt-4">
              <p>
                At Wouessi, we offer a comprehensive range of digital services
                to help businesses thrive in the online world.
              </p>
            </div>
          </div>
          <div className="md:flex items-center gap-12 text-white py-6">
            <div className="sm:w-2/5 w-3/4 mt-4 mx-auto relative bg-blue-950 h-80 rounded-lg text-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-6xl font-bold ">100+</p>
                <p className="text-sm font-light">Projets Completed</p>
              </div>
            </div>
            <div className="sm:w-full h-80 mt-4 bg-image bg-how-we-work rounded-xl">
              <div className="overlay-gray rounded-xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <p className="text-center uppercase text-4xl font-semibold">
                    how we work
                  </p>
                </div>
                <a href="#!">
                  <div className="absolute -bottom-5 -right-5 rounded-full w-28 h-28 bg-[#FF9900] z-2 border-5 border-t-8 border-b-8 border-l-8 border-r-8 border-white">
                    <i className="fa-solid fa-play text-gray-900 text-2xl absolute bottom-9 right-10"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#2B00AC] text-start text-white px-3 sm:px-6 lg:px-36 gap-12 py-20 relative">
          <div className="lg:w-2/4 space-y-6 mb-4">
            <h3 className="text-4xl font-bold">
              Explore what services we're offering
            </h3>
            <div className="w-1/6 border border-gray-400"></div>
          </div>
          <p className="hidden lg:block bg-decoration">
            <svg
              className="services-offered-line"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 568.02 201.81">
              <defs></defs>
              <g id="Calque_2" data-name="Calque 2">
                <g id="Calque_3" data-name="Calque 3">
                  <path
                    class="cls-1"
                    d="M1.42,201.32C7.8,183,24.94,175.18,43.05,173.11c41.32-4.72,94.84,27.72,126.87-14.15,5.54-7.24,9.63-14.84,17-20.6,15.52-12.16,36.31-12.64,55.09-14,11.23-.82,22.54-1.23,33.8-1.08,20.71.26,39.12-4.81,52.33-22.43C350.38,71.11,370.58,32.27,413,31c24.25-.7,48.43,1.8,72.66,2.35,16.4.38,33.66,1.18,49-5.54,6.68-2.93,33.63-18.48,31.68-27.52"
                  />
                  <circle class="cls-2" cx="91.26" cy="176.96" r="9" />
                  <ellipse
                    class="cls-3"
                    cx="91.43"
                    cy="176.63"
                    rx="10.62"
                    ry="10.49"
                    transform="translate(-103.44 136.82) rotate(-51.09)"
                  />
                  <circle class="cls-2" cx="289.26" cy="122.96" r="9" />
                  <ellipse
                    class="cls-4"
                    cx="289.43"
                    cy="122.63"
                    rx="10.62"
                    ry="10.49"
                    transform="translate(12.21 270.8) rotate(-51.09)"
                  />
                  <circle class="cls-2" cx="489.26" cy="34.96" r="9" />
                  <ellipse
                    class="cls-5"
                    cx="489.43"
                    cy="34.63"
                    rx="10.62"
                    ry="10.49"
                    transform="translate(155.05 393.7) rotate(-51.09)"
                  />
                </g>
              </g>
            </svg>
          </p>
          <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-20">
            <div className="flex items-center gap-6 lg:mt-48">
              <div className="mb-5 font-bold text-9xl">1</div>
              <div className="space-y-2">
                <h2 className="capitalize font-bold">online marketing</h2>
                <p className="text-sm">
                  Our online marketing services are designed to help your
                  business thrive the digital world.
                </p>
                <a href="#!" className="capitalize font-bold">
                  learn more +
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="mb-5 font-bold text-9xl">2</div>
              <div className="space-y-2">
                <h2 className="capitalize font-bold">design</h2>
                <p className="text-sm">
                  Our design services are crafted to elevate your brand's visual
                  identify and user experience.
                </p>
                <a href="#!" className="capitalize font-bold">
                  learn more +
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6 lg:mb-48">
              <div className="mb-5 font-bold text-9xl">3</div>
              <div className="space-y-2">
                <h2 className="capitalize font-bold">development</h2>
                <p className="text-sm">
                  Our development services are dedicated to building
                  robust,scalable, and hight-performance digital solutions.
                </p>
                <a href="#!" className="capitalize font-bold">
                  learn more +
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="bg-[#F4F4F4] pb-[5vw] pt-[4vw]">
        <span className="text-[#2B00AC]">
          <p className="text-[1.3vw] font-bold">Our Services</p>
        </span>
        <h1 className="text-[3.5vw] font-bold mt-[0.2vw] mb-[2vw]">
          What We Do
        </h1>
        <div className="flex justify-center gap-x-[2.5vw] text-white">
          <div className="flex flex-col w-[24vw] gap-y-[2.5vw]">
            <div className="flex flex-col justify-center gap-y-[0.5vw] w-full h-[16vw] px-5 text-left bg-[#2B00AC] rounded-lg">
              <FaChartLine className="w-[3vw] h-[3vw] text-[#FF9900]" />
              <h1 className="text-[1.8vw] font-bold">Digital Marketing</h1>
              <p className="text-[1.1vw]">
                propel your business forward in the online landscape.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-y-[0.5vw] w-full h-[16vw] px-5 text-left bg-white rounded-lg text-black">
              <BsTools className="w-[3vw] h-[3vw] text-[#FF9900]" />
              <h1 className="text-[1.8vw] font-bold">Development</h1>
              <p className="text-[1.1vw]">
                dedicated to building robust, scalable, and high-performance
                digital solutions.
              </p>
            </div>
          </div>
          <img src={WhatWeDo} className="w-[27vw] rounded-lg"></img>
          <div className="flex flex-col w-[24vw] gap-y-[2.5vw]">
            <div className="flex flex-col justify-center gap-y-[0.5vw] w-full h-[16vw] px-5 text-left bg-[#2B00AC] rounded-lg">
              <FaTags className="w-[3vw] h-[3vw] text-[#FF9900]" />
              <h1 className="text-[1.8vw] font-bold">Digital Marketing</h1>
              <p className="text-[1.1vw]">
                crafted to elevate your brand's visual identity and user
                experience.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-y-[0.5vw] w-full h-[16vw] px-5 text-left bg-white rounded-lg text-black">
              <MdSupportAgent className="w-[3vw] h-[3vw] text-[#FF9900]" />
              <h1 className="text-[1.8vw] font-bold">Business</h1>
              <p className="text-[1.1vw]">
                Our business services are tailored to support and enhance your
                company's growth and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#060606] text-white flex justify-center">
        <div className="w-[80%] mt-[4vw]">
          <p className="text-left text-[1.1vw] mb-[0.7vw] text-[#FF9900]">
            OUR PORTFOLIO
          </p>
          <div className="flex gap-x-[14vw] items-center">
            <h1 className="text-[3.5vw]/[4vw] text-left w-[50vw] font-bold">
              Explore our new recently completed projects.
            </h1>
            <p className="w-[22vw] text-[1.1vw] text-left text-[#C8CFD5] float-right">
              We are web designers, developers, project managers, and digital
              solutions using the latest trends and technologies.
            </p>
          </div>
          <div className="w-1/6 mt-[2vw] border border-gray-400"></div>
          <div className="flex justify-end gap-x-[0.4vw] mt-[-1vw]">
            <PiArrowCircleLeftLight className="text-[5.5vw] hover:fill-[#FF9900] cursor-pointer" />
            <PiArrowCircleRightLight className="text-[5.5vw] hover:fill-[#FF9900] cursor-pointer" />
          </div>
          <div className="flex justify-center gap-x-[2vw] mt-[3vw] mb-[5vw] ">
            <div className="w-[50vw] pb-[2vw] bg-white rounded-2xl">
              <div className="flex w-full h-[29vw]">
                <img
                  src={LeftSideImagePortfolio}
                  className="h-full object-cover rounded-t-2xl"></img>
              </div>
              <div className="flex justify-center gap-x-[8vw] items-center bg-white text-black h-[7vw]">
                <div className="flex flex-col text-left">
                  <h2 className="text-[2vw] font-bold">AfricaBlockChain</h2>
                  <p className="text-[1.1vw]">Featured - Blockchain, Website</p>
                </div>
                <div className="w-[11vw] h-[3.5vw] rounded-md bg-[#FF9900] text-[1.1vw] flex items-center justify-center cursor-pointer">
                  See Project
                  <BsArrowRightShort className="text-[2vw]" />
                </div>
              </div>
            </div>
            <div className="w-[50vw] pb-[2vw] bg-white rounded-2xl">
              <div className="flex w-full h-[29vw]">
                <img
                  src={RightSideImagePortfolio}
                  className="h-full object-cover rounded-t-2xl"></img>
              </div>
              <div className="flex justify-center gap-x-[12vw] items-center text-black h-[7vw]">
                <div className="flex flex-col text-left">
                  <h2 className="text-[2vw] font-bold">AfroLifestyle</h2>
                  <p className="text-[1.1vw]">Featured - eCommerce</p>
                </div>
                <div className="w-[11vw] h-[3.5vw] rounded-md bg-[#FF9900] text-[1.1vw] flex items-center justify-center cursor-pointer">
                  See Project
                  <BsArrowRightShort className="text-[2vw]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#2B00AC]">
        <div className="w-3/5 mx-auto text-center text-white px-3 sm:px-6 lg:px-44 py-20">
          <p className="font-bold text-[#FF9900]">clients testimonials</p>
          <h1 className="capitalize text-4xl font-bold py-6">
            happy words from happy customer
          </h1>
          <div className="w-1/6 mx-auto border border-gray-400"></div>
          <p className="py-4 lg:px-6">
            “I'm so impressed by your dedication to learning. I know it wasn't
            easy when that technology solution you presented didn't work out.”
          </p>

          <div className="w-full mx-auto py-4">
            <img
              src={customerPictures}
              alt="young-man"
              width="80px"
              height="20px"
              className="mx-auto rounded-full"></img>
          </div>

          <p className="py-4 font-bold capitalize">Bessie Cooper</p>
          <p className="pb-4 text-sm">Marketing Coordinator, HCAB</p>
          <div className="flex justify-center gap-3">
            <div>
              <a href="#!">
                <i className="fa-solid fa-arrow-left font-extralight w-12 h-12 p-4 border border-white rounded-full"></i>
              </a>
            </div>
            <div>
              <a href="#!">
                <i className="fa-solid fa-arrow-right bg-[#FF9900] text-black font-extralight w-12 h-12 p-4 rounded-full"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center px-3 sm:px-6 lg:px-12 py-20">
          <p className="capitalize font-bold text-[#2B00AC]">pricing plans</p>
          <p className="lg:w-1/3 mx-auto text-4xl font-bold py-6">
            Choose a Plan that Works for you
          </p>
          <div className="w-1/6 mx-auto border border-gray-400"></div>
          <div className="flex justify-center gap-3 py-10">
            <button className="w-[11vw] h-[4vw] rounded-md bg-[#FF9900] font-bold text-[1.1vw]">
              Monthly
            </button>
            <button className="w-[11vw] h-[4vw] rounded-md bg-[#FFF] font-bold text-[1.1vw]">
              Yearly
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16 gap-x-[3vw]">
            <div className="flex flex-col justify-between p-8 text-sm rounded-md border border-gray-300">
              <p className="capitalize">small business</p>
              <p className="text-4xl text-center font-extrabold mb-20">
                $2,000 USD
              </p>
              <ul className="p-10 list-disc mb-16">
                <li className="py-4">
                  <p>Respomsive Website - 5Pages</p>
                </li>
                <li className="py-4">
                  <p>Social Media Management - 2 accounts / 1 month</p>
                </li>
                <li className="py-4">
                  <p>Comprtitor Analysis - 1 competitor</p>
                </li>
                <li className="py-4">
                  <p>Logo Design - 1 logo</p>
                </li>
                <li className="py-4">
                  <p>Paid Social Media - 1 week</p>
                </li>
                <li className="py-4">
                  <p>Paid Search - 1 week</p>
                </li>
              </ul>
              <div className="flex justify-center">
                <button className="w-[11vw] h-[4vw] rounded-md bg-[#2B00AC] text-white font-bold text-[1.1vw]">
                  Join This Plan
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-[#2B00AC] text-white rounded-lg p-8 text-sm">
              <p className="capitalize">Pro</p>
              <p className="text-4xl text-center font-extrabold">$4,500 USD</p>
              <ul className="p-10 list-disc">
                <li className="border-b py-4">
                  <p>Responsive Website - 15 pages</p>
                </li>
                <li className="border-b py-4">
                  <p>Social Media Management - 3 accounts / 2 months</p>
                </li>
                <li className="border-b py-4">
                  <p>Competitors Analysis - 2 competitors</p>
                </li>
                <li className="border-b py-4">
                  <p>Brochure Design- 3 Brochures</p>
                </li>
                <li className="border-b py-4">
                  <p>Logo Design - 1 logo</p>
                </li>
                <li className="border-b py-4">
                  <p>Paid Social Media - 1 month</p>
                </li>
                <li className="border-b py-4">
                  <p>Paid Search - 2 weeks</p>
                </li>
                <li className="border-b py-4">
                  <p>Email Marketing - 1 momth</p>
                </li>
                <li className="py-2">
                  <p>SEO strategiy - Basic</p>
                </li>
              </ul>
              <div className="flex justify-center">
                <button className="w-[11vw] h-[4vw] rounded-md bg-[#FF9900] font-bold text-[1.1vw]">
                  Join This Plan
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 text-sm rounded-md border border-gray-300">
              <p className="capitalize">corpoorate business</p>
              <p className="capitalize text-4xl text-center font-extrabold">
                call
              </p>
              <ul className="p-10 list-disc">
                <li className="py-4">
                  <p>Responsive Website - Unlimited pages</p>
                </li>
                <li className="py-4">
                  <p>Social Media Management - Unlimited accounts / 3 months</p>
                </li>
                <li className="py-4">
                  <p>Competitors Analysis - 5 competitors</p>
                </li>
                <li className="py-4">
                  <p>Brochure Design- Unlimited Brochures</p>
                </li>
                <li className="py-4">
                  <p>Logo Design - 1 logo</p>
                </li>
                <li className="py-4">
                  <p>Paid Social Media - 1 month</p>
                </li>
                <li className="py-4">
                  <p>Paid Search - 1 month</p>
                </li>
                <li className="py-4">
                  <p>Email Marketing - 3 momth</p>
                </li>
                <li className="py-4">
                  <p>SEO strategiy - Full Stack</p>
                </li>
              </ul>
              <div className="flex justify-center">
                <button className="w-[11vw] h-[4vw] rounded-md bg-[#2B00AC] text-white font-bold text-[1.1vw]">
                  Join This Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center px-3 sm:px-6 lg:px-12 py-20 relative bg-[#F4F4F4]">
          <div className="bg-[#FF9900] w-36 h-20 absolute top-[15%] left-[22%] -z-10"></div>
          <p className="lg:w-2/3 mx-auto text-7xl font-bold">
            Ready for your Business{" "}
            <span className="text-[#FF9900]">success</span>?
          </p>
          <p className="py-14">Contact us now and save 25%!</p>
          <p>
            <svg
              className="button-decoration-left"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40.38 41.65">
              <defs></defs>
              <g id="Calque_2" data-name="Calque 2">
                <g id="Calque_2-2" data-name="Calque 2">
                  <line
                    className="cls-1"
                    x1="1.19"
                    y1="6.02"
                    x2="27.79"
                    y2="25.71"
                  />
                  <line
                    className="cls-1"
                    x1="37.91"
                    y1="18.07"
                    x2="38.38"
                    y2="0.05"
                  />
                  <line
                    className="cls-1"
                    x1="19.94"
                    y1="39.66"
                    x2="1.01"
                    y2="37.59"
                  />
                </g>
              </g>
            </svg>
          </p>
          <button className="w-[11vw] h-[4vw] rounded-md bg-[#FF9900] font-bold text-[1.1vw]">
            Get Started
          </button>

          <p>
            <svg
              className="button-decoration-right"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40.85 50.24">
              <defs></defs>
              <g id="Calque_2" data-name="Calque 2">
                <g id="Calque_2-2" data-name="Calque 2">
                  <line
                    className="cls-1"
                    x1="39.72"
                    y1="38.99"
                    x2="12.47"
                    y2="20.22"
                  />
                  <line
                    className="cls-1"
                    x1="16.41"
                    y1="8.17"
                    x2="33.3"
                    y2="1.87"
                  />
                  <line
                    className="cls-1"
                    x1="1.81"
                    y1="32.16"
                    x2="9.91"
                    y2="49.39"
                  />
                </g>
              </g>
            </svg>
          </p>
        </div>
      </section>
      <section>
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
      </section>
    </div>
  );
}

export default Home;
