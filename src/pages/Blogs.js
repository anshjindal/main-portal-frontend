import React, { useEffect, useState } from "react";
import BlogPageLaptop from "../assets/Images/blog_page_laptop.webp";
import bloglist1 from "../assets/Images/BlogPost1.webp";
import bloglist2 from "../assets/Images/BlogPost2.webp";
import bloglist3 from "../assets/Images/bloglist3.webp";
import BlogsCarousel from "../components/Reusable/BlogsCarousel";
import CallToActionSection from "../components/Reusable/CallToActionSection";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import BlogMetaDataRender from "../components/Blog/BlogMetaDataRender";
import toast, { Toaster } from "react-hot-toast";
import AdminData from "../content/Admin/Admin";

function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { lang } = useParams();

  const content = AdminData[lang] || AdminData["en"];

  const navigate = useNavigate();

  const getBlogs = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_WOUESSI_API_URL}/api/blog`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log("d", data);

      if (!response?.ok) {
        return toast.error(data?.error, { duration: 5000 });
      }

      setBlogData(data?.blogs); // Access the blogs array from the response
    } catch (err) {
      return toast.error(err, { duration: 5000 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    console.log("bb", blogData);
  }, [blogData]);

  const remainingBlogs = blogData.slice(3);

  return (
    <>
      <div className="!z-50">
        <Toaster position="top-right" />
      </div>
      <BlogMetaDataRender />
      <div className="flex justify-center mt-[5vw] page-background">
        <div className="w-full">
          {/* First Main Heading Div */}
          <div className="flex justify-center">
            <div className="w-[1000px]">
              <div className="relative mb-[7vw]">
                <div
                  style={{ backgroundImage: `url(${BlogPageLaptop})` }}
                  className="w-[30vw] h-[40vw] bg-cover bg-[center]"
                ></div>
                <div className="absolute top-20 left-80 w-[44vw] h-[28vw] bg-[#2B00AC]">
                  <div className="m-[2vw]">
                    <div className="flex items-center mb-[1vw]">
                      <button
                        className="border-white text-white border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-[#2B00AC] hover:bg-white transition duration-300"
                        disabled
                      >
                        SEO SERVICES
                      </button>
                      <p className="text-[1.1vw] text-white ml-[1vw]">
                        5 MIN Read
                      </p>
                    </div>

                    <div className="w-[90%] text-left text-white">
                      <div className="flex">
                        <h1 className="text-[3.5vw]/[4.2vw] font-bold">
                          Key Reasons Why Your Business Needs Mobile SEO
                          Services
                        </h1>
                      </div>
                      <div className="flex justify-between mt-[3vw]">
                        <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                          In this comprehensive guide, we delve into the key
                          reasons why your business needs to prioritize Mobile
                          SEO Services for sustainable growth.
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
                    disabled
                  >
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
                    disabled
                  >
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
                    disabled
                  >
                    SEO SERVICES
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Third Div */}
          <div className="flex justify-center">
            <div className="w-[80vw]">
              {blogData &&
                blogData.slice(0, 3).map((blog, index) => {
                  const isEven = index % 2 === 0; // Check if index is even or odd

                  return (
                    <div
                      key={index}
                      className={`flex justify-between text-left items-center pt-[2vw] mt-[5vw] mb-[2vw] ${
                        isEven ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* Image Section */}
                      <div
                        className={`w-[60vw] h-[30vw] bg-cover bg-[center_right_-2vw] ${
                          isEven ? "order-1" : "order-2"
                        }`}
                        style={{
                          backgroundImage: `url(${
                            blog.imageUrl ||
                            (index === 0
                              ? bloglist1
                              : index === 1
                              ? bloglist2
                              : bloglist3)
                          })`,
                        }}
                      ></div>

                      {/* Text Section */}
                      <div className="w-[44vw] h-[28vw] ml-[3vw]">
                        <div className="m-[2vw]">
                          <div className="flex items-center">
                            <div className="flex items-center gap-[0.5vw] flex-wrap">
                              {blog.tags && blog.tags.length > 0 ? (
                                blog.tags.map((tag, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-block border-[#666666] text-[#666666] cursor-pointer border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent hover:text-white hover:bg-[#666666] transition-all duration-300 ease-in-out"
                                  >
                                    {tag}
                                  </span>
                                ))
                              ) : (
                                <span className="text-[#666666] border-[#666666] border-[0.2vw] rounded-full px-[1.5vw] py-[0.5vw] text-[1vw] bg-transparent">
                                  SEO SERVICES
                                </span>
                              )}
                            </div>

                            <p className="text-[1.1vw] ml-[1vw]">
                              {blog.timeToRead} {content.MinutesToRead}
                            </p>
                          </div>

                          <div className="text-left mt-[2vw]">
                            <div className="flex">
                              <h1 className="text-[2vw] font-bold">
                                {blog.title[lang]}
                              </h1>
                            </div>
                            <div className="flex justify-between mt-[3vw]">
                              <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                                {blog.shortDesc[lang]}
                              </p>
                            </div>
                            <div className="mt-[1vw]">
    {/* <button
  onClick={() => navigate(`/${lang}/${blog.slug}`)}
      className="bg-[#250978] text-white text-[1vw] px-[1.5vw] py-[0.5vw] rounded-full shadow-md hover:bg-[#400cbc] transition-all duration-300 ease-in-out"
    >
      Read More
    </button> */}

    <NavLink to={`/${lang}/${blog.slug}`} className="bg-[#250978] text-white text-[1vw] px-[1.5vw] py-[0.5vw] rounded-full shadow-md hover:bg-[#400cbc] transition-all duration-300 ease-in-out">Read More</NavLink>
  </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <BlogsCarousel blogs={remainingBlogs} />

          {/* Last Div */}
          <CallToActionSection
            Content="We would love to hear more about your project"
            CallToAction="Let's Talk"
            Title="Work With Us"
            lang={lang}
          />
        </div>
      </div>
    </>
  );
}

export default Blogs;
