import React from "react";
import "../styles/Pricing.css";
import { CgArrowLongUp } from "react-icons/cg";
import BantuEd from "../assets/BantuEdProductImage.png";
import Egolu from "../assets/egolu-app.png";
import WorkWithUs from "../components/WorkWithUs";

function Products() {
  return (
    <div className="flex justify-center mt-[5vw] mb-[5vw]">
      <div className="w-[80%]">
        {/* First Main Heading Div */}
        <div className="flex items-center justify-between max-[450px]:flex-col max-[450px]:gap-y-[6vw]">
          <div>
            <h1 className="text-left w-[70%] text-[4vw]/[4vw] font-bold max-[450px]:text-[7.5vw]/[8.5vw] max-[450px]:w-full">
              Experience Our Cutting-Edge Software Solutions
            </h1>
          </div>
          <div className="w-[55%] max-[450px]:w-[100%]">
            <p className="text-left text-[1.1vw] max-[450px]:text-[3vw] max-[450px]:font-semibold">
              Welcome to the forefront of innovation. We are proud to offer a
              suite of products that embody advanced technologies and
              groundbreaking solutions.
            </p>
          </div>
        </div>

        {/* Second Div */}
        <div className="flex justify-between text-left items-center border-[#9C9C9C] pt-[2vw] mt-[5vw] mb-[2vw] max-[450px]:items-start max-[450px]:pb-[5vw]">
          <div className="flex flex-col gap-y-[2vw]">
            <h1 className="text-[3.5vw] text-[#2E2E2E] font-extrabold max-[450px]:text-[6vw] max-[450px]:font-bold max-[450px]:mb-[4vw]">
              BantuEd
            </h1>
            <div className="flex border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[25vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] items-center max-[450px]:h-fit max-[450px]:text-[2.5vw] max-[450px]:w-[35vw] max-[450px]:pl-[2vw]">
              BantuEd leads the way in revolutionizing education through
              advanced technologies and tailored solutions.
            </div>
            <a
              href="https://bantued.com"
              className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] ml-[2.8vw] w-[10vw] h-[10vw] text-[1vw] text-black cursor-pointer hover:bg-[#2B00AC] hover:text-white hover:border-[#2B00AC] transition ease-in-out duration-300 max-[450px]:mt-[5vw] max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw]"
              target="_blank"
              rel="noopener noreferrer">
              Learn More
              <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
            </a>
          </div>
          <div
            className="w-[30vw] h-[35vw] bg-cover bg-[center_right_-2vw] max-[450px]:w-[33vw] max-[450px]:h-[55vw] max-[450px]:bg-center"
            style={{ backgroundImage: `url(${BantuEd})` }}></div>
        </div>

        {/* Third Div */}
        <div className="flex justify-between text-left items-center border-t-[0.01vw] border-[#9C9C9C] pt-[2vw] mt-[5vw] mb-[2vw] max-[450px]:items-start max-[450px]:pt-[5vw]">
          <div
            className="w-[30vw] h-[35vw] bg-cover bg-[center_right_-2vw] max-[450px]:w-[33vw] max-[450px]:h-[55vw] max-[450px]:bg-center"
            style={{ backgroundImage: `url(${Egolu})` }}></div>
          <div className="flex flex-col gap-y-[2vw]">
            <h1 className="text-[3.5vw] text-[#2E2E2E] font-extrabold max-[450px]:text-[6vw] max-[450px]:font-bold max-[450px]:mb-[4vw]">
              EGOLU App
            </h1>
            <div className="flex border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[25vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] items-center max-[450px]:h-fit max-[450px]:text-[2.5vw] max-[450px]:w-[35vw] max-[450px]:pl-[2vw]">
              EGOLU App is a groundbreaking solution revolutionizing payroll and
              human resources management.
            </div>
            <a
              href="https://egolu.co"
              className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] ml-[2.8vw] w-[10vw] h-[10vw] text-[1vw] text-black cursor-pointer hover:bg-[#2B00AC] hover:text-white hover:border-[#2B00AC] transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:mt-[5vw] max-[450px]:text-[3vw]"
              target="_blank"
              rel="noopener noreferrer">
              Learn More
              <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
            </a>
          </div>
        </div>

        <WorkWithUs
          Title="OUR PRODUCT"
          Heading="Explore our innovative product!"
          CallToAction="Let's Talk!"
        />
      </div>
    </div>
  );
}
export default Products;
