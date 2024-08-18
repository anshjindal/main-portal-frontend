import React from "react";
import "../styles/Pricing.css";
import { CgArrowLongUp } from "react-icons/cg";
import BantuEd from "../assets/BantuEd.png";
import Egolu from "../assets/egolu-app.png";

function Products() {
  return (
    <div className="flex justify-center mt-[5vw] mb-[5vw]">
      <div className="w-[80%]">
        {/* First Main Heading Div */}
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-left w-[90%] text-[4vw]/[4vw] font-bold">
              Experience Our Cutting-Edge Software Solutions
            </h1>
          </div>
          <div>
            <p className="text-left w-[62%] text-[1.1vw]">
              Welcome to the forefront of innovation. We are proud to offer a
              suite of products that embody advanced technologies and
              groundbreaking solutions.
            </p>
          </div>
        </div>

        {/* Second Div */}
        <div className="flex justify-between text-left items-center border-[#9C9C9C] pt-[2vw] mt-[5vw] mb-[2vw]">
          <div className="flex flex-col gap-y-[2vw]">
            <h1 className="text-[3.5vw] text-[#2E2E2E] font-extrabold">
              BantuEd
            </h1>
            <div className="flex border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] items-center">
              BantuEd leads the way in revolutionizing education through
              advanced technologies and tailored solutions.
            </div>
            <a
              href="https://bantued.com"
              className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] ml-[2.8vw] w-[10vw] h-[10vw] text-[1vw] text-black cursor-pointer hover:bg-[#2B00AC] hover:text-white hover:border-[#2B00AC] transition ease-in-out duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
              <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
            </a>
          </div>
          <div
            className="w-[25vw] h-[30vw] bg-cover bg-[center_right_-2vw]"
            style={{ backgroundImage: `url(${BantuEd})` }}
          ></div>
        </div>

        {/* Third Div */}
        <div className="flex justify-between text-left items-center border-t-[0.01vw] border-[#9C9C9C] pt-[2vw] mt-[5vw] mb-[2vw]">
          <div
            className="w-[25vw] h-[30vw] bg-cover bg-[center_right_-2vw]"
            style={{ backgroundImage: `url(${Egolu})` }}
          ></div>
          <div className="flex flex-col gap-y-[2vw]">
            <h1 className="text-[3.5vw] text-[#2E2E2E] font-extrabold">
              EGOLU App
            </h1>
            <div className="flex border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] items-center">
              EGOLU App is a groundbreaking solution revolutionizing payroll and
              human resources management.
            </div>
            <a
              href="https://egolu.co"
              className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] ml-[2.8vw] w-[10vw] h-[10vw] text-[1vw] text-black cursor-pointer hover:bg-[#2B00AC] hover:text-white hover:border-[#2B00AC] transition ease-in-out duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
              <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
            </a>
          </div>
        </div>

        {/* Last Div */}
        <div className="flex justify-center">
          <div className="w-[80%]  mb-[5vw] mt-[6vw]">
            <p className="text-left text-[1.1vw]">WORK WITH US</p>
            <div className="flex justify-between">
              <h1 className="text-left w-[60%] text-[4vw]/[4vw] font-bold">
                Reach out for more insights on our products!
              </h1>
              <a
                href="/frontend-react-wouessi-website-v2/Careers"
                className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] ml-[2.8vw] w-[10vw] h-[10vw] text-[1vw] text-black cursor-pointer hover:bg-[#2B00AC] hover:text-white hover:border-[#2B00AC] transition ease-in-out duration-300"
              >
                Learn More
                <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
