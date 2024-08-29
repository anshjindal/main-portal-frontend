import React from "react";
import "../styles/Pricing.css";
import { CgArrowLongUp } from "react-icons/cg";
import BantuEd from "../assets/BantuEd.png";
import Egolu from "../assets/egolu-app.png";
import AfricaBlockChainImage from "../assets/left-side-image-portfolio.jpeg";
import AfroLifestyleImage from "../assets/right-side-image-portfolio.png";
import BlogPageLaptop from "../assets/blog_page_laptop.png";
import bloglist1 from "../assets/bloglist1.png";
import bloglist2 from "../assets/bloglist2.png";
import bloglist3 from "../assets/bloglist3.png";
import Carousel from "../components/ArticlesCarousel";

function Blog() {
  const data = [
    {
      image: AfricaBlockChainImage,
      title: "Key Reasons Why Your Business Needs Mobile SEO Services",
      subtitle:
        "In this comprehensive guide, we delve into the key reasons why your business needs to prioritize Mobile SEO Services for sustainable growth.",
      tags: "SEO Services",
      duration: "5 min",
    },
    {
      image: AfroLifestyleImage,
      title: "Technical SEO Services: Optimize and Rank your Website",
      subtitle:
        "In this comprehensive guide, we'll delve into the world of Technical SEO.",
      tags: "AI",
      duration: "12 min",
    },
    {
      image: AfroLifestyleImage,
      title: "How to Use AI for to Create Content that Converts",
      subtitle:
        "This article delves into the realm of AI for content creations.",
      tags: "SEO Services",
      duration: "15 min",
    },
    {
      image: AfricaBlockChainImage,
      title:
        "The Growing Adoption of Integrated AI—Top Business Applications for 2024",
      subtitle:
        "Since over half of businesses are using AI, where does that put your company in the marketplace?",
      tags: "SEO Services",
      duration: "5 min",
    },
    {
      image: AfricaBlockChainImage,
      title: "Technical SEO Services: Optimize and Rank your Website",
      subtitle:
        "In this comprehensive guide, we'll delve into the world of Technical SEO.",
      tags: "SEO Services",
      duration: "2 min",
    },
    {
      image: AfroLifestyleImage,
      title: "How to Use AI for to Create Content that Converts",
      subtitle:
        "This article delves into the realm of AI for content creations.",
      tags: "SEO Services",
      duration: "6 min",
    },
    {
      image: AfroLifestyleImage,
      title:
        "The Growing Adoption of Integrated AI—Top Business Applications for 2024",
      subtitle:
        "Since over half of businesses are using AI, where does that put your company in the marketplace?",
      tags: "SEO Services",
      duration: "4 min",
    },
    {
      image: AfricaBlockChainImage,
      title: "AfricaBlockChain",
      subtitle: "Featured - Blockchain, Website",
      tags: "SEO Services",
      duration: "7 min",
    },
  ];

  return (
    <div className="flex justify-center mt-[5vw] mb-[5vw]">
      <div className="w-full">
        {/* First Main Heading Div */}
        <div className="flex justify-center">
          <div className="w-[1000px]">
            <div className="relative mb-[7vw]">
              <div
                style={{ backgroundImage: `url(${BlogPageLaptop})` }}
                className="w-[30vw] h-[40vw] bg-cover bg-[center]"></div>
              <div className="absolute top-20 left-80 w-[44vw] h-[28vw] bg-[#2B00AC]">
                <div className="m-[2vw]">
                  <div className="flex items-center mb-[1vw]">
                    <button
                      className="border-white text-white border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-[#2B00AC] hover:bg-white transition duration-300"
                      disabled>
                      SEO SERVICES
                    </button>
                    <p className="text-[1.1vw] text-white ml-[1vw]">
                      5 MIN Read
                    </p>
                  </div>

                  <div className="w-[90%] text-left text-white">
                    <div className="flex">
                      <h1 className="text-[3.5vw]/[4.2vw] font-bold">
                        Key Reasons Why Your Business Needs Mobile SEO Services
                      </h1>
                    </div>
                    <div className="flex justify-between mt-[3vw]">
                      <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                        In this comprehensive guide, we delve into the key
                        reasons why your business needs to prioritize Mobile SEO
                        Services for sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Div */}
        <div className="h-[28vw] bg-[#2B00AC] p-[2vw] mt-[5vw] mb-[2vw]">
          <div className="flex justify-center mb-[3vw]">
            <h1 className="text-[3.5vw]/[4.2vw] font-bold text-white">
              LATEST ARTICLE
            </h1>
          </div>
          <div className="flex justify-around">
            <div className="flex text-left text-white">
              <div className="p-5">
                <div className="mb-[2vw]">
                  <p className="text-[1.4vw] font-bold">
                    Technical SEO Services: Optimize and Rank your Website
                  </p>
                  <p className="text-[1.1vw]">
                    In this comprehensive guide, we'll delve into the world of
                    Technical SEO.
                  </p>
                </div>
                <button
                  className="border-white text-white border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#D26B2F] transition duration-300"
                  disabled>
                  SEO SERVICES
                </button>
              </div>

              <div className="w-[0.2vw] bg-gray-300 h-[100%]" />

              <div className="p-5">
                <div className="mb-[2vw]">
                  <p className="text-[1.4vw] font-bold">
                    Technical SEO Services: Optimize and Rank your Website
                  </p>
                  <p className="text-[1.1vw]">
                    In this comprehensive guide, we'll delve into the world of
                    Technical SEO.
                  </p>
                </div>
                <button
                  className="border-white text-white border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#D26B2F] transition duration-300"
                  disabled>
                  SEO SERVICES
                </button>
              </div>

              <div className="w-[0.2vw] bg-gray-300 h-[100%]" />

              <div className="p-5">
                <div className="mb-[2vw]">
                  <p className="text-[1.4vw] font-bold">
                    Technical SEO Services: Optimize and Rank your Website
                  </p>
                  <p className="text-[1.1vw]">
                    In this comprehensive guide, we'll delve into the world of
                    Technical SEO.
                  </p>
                </div>
                <button
                  className="border-white text-white border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#D26B2F] transition duration-300"
                  disabled>
                  SEO SERVICES
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Third Div */}
        <div className="flex justify-center">
          <div className="w-[80vw]">
            <div className="flex justify-between text-left items-center pt-[2vw] mt-[5vw] mb-[2vw]">
              <div className=" w-[44vw] h-[28vw] ">
                <div className="m-[2vw]">
                  <div className="flex items-center">
                    <button
                      className="border-[#666666] text-[#666666] border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#666666] transition duration-300"
                      disabled>
                      SEO SERVICES
                    </button>
                    <p className="text-[1.1vw] ml-[1vw]">5 MIN Read</p>
                  </div>
                  <div className="text-left mt-[2vw]">
                    <div className="flex">
                      <h1 className="text-[2vw] font-bold">
                        Technical SEO Services: Optimize and Rank your Website
                      </h1>
                    </div>
                    <div className="flex justify-between mt-[3vw]">
                      <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                        In this comprehensive guide, we'll delve into the world
                        of Technical SEO.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[60vw] h-[30vw] bg-cover bg-[center_right_-2vw]"
                style={{ backgroundImage: `url(${bloglist1})` }}></div>
            </div>

            <div className="flex justify-between text-left items-center pt-[2vw] mt-[5vw] mb-[2vw]">
              <div
                className="w-[60vw] h-[30vw] bg-cover bg-[center_right_-2vw]"
                style={{ backgroundImage: `url(${bloglist2})` }}></div>
              <div className=" w-[44vw] h-[28vw] ml-[3vw]">
                <div className="m-[2vw]">
                  <div className="flex items-center">
                    <button
                      className="border-[#666666] text-[#666666] border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#666666] transition duration-300"
                      disabled>
                      AI
                    </button>
                    <p className="text-[1.1vw] ml-[1vw]">5 MIN Read</p>
                  </div>
                  <div className="text-left mt-[2vw]">
                    <div className="flex">
                      <h1 className="text-[2vw] font-bold">
                        How to Use AI for to Create Content that Converts
                      </h1>
                    </div>
                    <div className="flex justify-between mt-[3vw]">
                      <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                        This article delves into the realm of AI for content
                        creations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-left items-center pt-[2vw] mt-[5vw] mb-[2vw]">
              <div className=" w-[44vw] h-[28vw] ">
                <div className="m-[2vw]">
                  <div className="flex items-center">
                    <button
                      className="border-[#666666] text-[#666666] border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#666666] transition duration-300"
                      disabled>
                      AI
                    </button>
                    <p className="text-[1.1vw] ml-[1vw]">12 MIN Read</p>
                  </div>
                  <div className="text-left mt-[2vw]">
                    <div className="flex">
                      <h1 className="text-[2vw] font-bold">
                        The Growing Adoption of Integrated AI—Top Business
                        Applications for 2024
                      </h1>
                    </div>
                    <div className="flex justify-between mt-[3vw]">
                      <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                        Since over half of businesses are using AI, where does
                        that put your company in the marketplace?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[60vw] h-[30vw] bg-cover bg-[center_right_-2vw]"
                style={{ backgroundImage: `url(${bloglist3})` }}></div>
            </div>
          </div>
        </div>

        <Carousel cards={data} />

        {/* Last Div */}
        <div className="flex justify-center">
          <div className="w-[80%]  mb-[5vw] mt-[6vw]">
            <p className="text-left text-[1.1vw]">WORK WITH US</p>
            <div className="flex justify-between">
              <h1 className="text-left w-[60%] text-[4vw]/[4vw] font-bold">
                We would love to hear more about your project
              </h1>
              <a
                href="/frontend-react-wouessi-website-v2/Careers"
                className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] ml-[2.8vw] w-[10vw] h-[10vw] text-[1vw] text-black cursor-pointer hover:bg-[#2B00AC] hover:text-white hover:border-[#2B00AC] transition ease-in-out duration-300">
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

export default Blog;
