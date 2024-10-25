import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/Blogpost.css";
import BlogsCarousel from "../components/Reusable/BlogsCarousel";
import CallToActionSection from "../components/Reusable/CallToActionSection";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // for rendering tables, strikethrough, task lists, etc.
import rehypeRaw from "rehype-raw"; // to allow rendering raw HTML inside Markdown

import Contents from "../content/Layout/Footer.json";

import { FaXTwitter } from "react-icons/fa6";
import BlogSisebar from "../components/Blog/BlogSidebar";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

function BlogPost() {
  const [blogData, setBlogData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const { lang, slug } = useParams();
  const Content = Contents[lang] || Contents["en"]; // Fallback to English if `Content` is undefined
  const navigate = useNavigate();

  const fetchBlogData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_WOUESSI_API_URL}/api/blog/${slug}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response?.status === 404) {
        toast.error(data?.error, { duration: 5000 });
        setTimeout(() => {
          navigate("/en/error");
        }, 3000);
      } else {
        setBlogData(data?.message);
      }
    } catch (err) {
      toast.error(err.message, { duration: 5000 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [slug, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error if exists
  }

  const blogUrl = window.location.href;
  const title =
    blogData && blogData.length > 0
      ? blogData[0].translations.find(
          (translation) => translation.language === lang
        )?.title
      : "";

  return (
    <div className="flex justify-center  mb-[5vw] max-[450px]:mt-0 page-background">
      <div className="w-[80%] max-[450px]:w-[100%]">
        {/* Header Section */}
        <div className="flex justify-between mb-[1vw] max-[450px]:hidden">
          <p className="text-[2vw]">July 12th, 2024</p>

          <div className="flex justify-center items-center text-[#2703A5] text-[1.5vw] gap-x-[1.6vw] max-[450px]:text-[8vw] max-[450px]:w-[30vw] max-[450px]:flex-wrap max-[450px]:gap-x-[10vw] max-[450px]:gap-y-[5vw]">
            <Link
              to={Content.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-300 z-10"
            >
              <FaFacebook />
            </Link>
            <Link
              to={Content.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-300 z-10"
            >
              <FaXTwitter />
            </Link>
            <Link
              to={Content.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-300 z-10"
            >
              <FaLinkedin />
            </Link>
            <Link
              to={Content.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-300 z-10"
            >
              <FaInstagram />
            </Link>
            <Link
              to={Content.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-300 z-10"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex justify-center">
          {/* Sidebar Navigation */}
          <BlogSisebar />

          {/* Blog Content */}
          <div className="w-[60%] mb-[7vw] max-[450px]:w-[90%]">
            <div className="p-2">
              {/* Tags and Read Time */}
              <div className="flex items-center justify-between mb-[1vw] space-x-[1vw]">
                <button
                  className="border-[#D26B2F] text-[#D26B2F] border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1.3vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#D26B2F] transition duration-300 max-[450px]:text-[2vw]"
                  disabled
                >
                  SEO SERVICES
                </button>
                <p className="text-[1.3vw] max-[450px]:text-[2vw]">
                  5 MIN Read
                </p>

                <div className="space-x-2">
                  <FacebookShareButton url={blogUrl} quote={title}>
                    <FacebookIcon
                      className="h-5 w-5 object-contain hover:scale-125 transition-transform duration-300 lg:h-7 lg:w-7"
                      round
                    />
                  </FacebookShareButton>
                  <TwitterShareButton url={blogUrl} title={title}>
                    <TwitterIcon
                      className="h-5 w-5 object-contain hover:scale-125 transition-transform duration-300 lg:h-7 lg:w-7"
                      round
                    />
                  </TwitterShareButton>
                  <LinkedinShareButton url={blogUrl} title={title}>
                    <LinkedinIcon
                      className="h-5 w-5 object-contain hover:scale-125 transition-transform duration-300 lg:h-7 lg:w-7"
                      round
                    />
                  </LinkedinShareButton>
                  <WhatsappShareButton url={blogUrl} title={title}>
                    <WhatsappIcon
                      className="h-5 w-5 object-contain hover:scale-125 transition-transform duration-300 lg:h-7 lg:w-7"
                      round
                    />
                  </WhatsappShareButton>
                </div>
              </div>

              {/* Blog Title and Image */}
              <div className="blog-list prose max-w-full">
                {blogData &&
                  blogData.map((blog) => {
                    const selectedTranslation = blog.translations.find(
                      (translation) => translation.language === lang
                    );

                    if (!selectedTranslation) {
                      return null; // If no translation for the selected language, skip this blog
                    }

                    const { title, markdownContent, author } =
                      selectedTranslation;

                    return (
                      <div key={blog._id} className="blog-post mb-8 space-y-4">
                        <h1 className="text-3xl font-semibold mb-2">{title}</h1>
                        <p className="text-sm text-gray-600">
                          <em>By {author}</em> |{" "}
                          <em>
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </em>
                        </p>

                        {/* Render Markdown content */}
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]} // Enables GFM (tables, task lists, etc.)
                          rehypePlugins={[rehypeRaw]} // Allows raw HTML rendering
                          components={{
                            img: ({ node, ...props }) => (
                              <img
                                {...props}
                                className="sm:w-[70vw] h-auto mx-auto object-contain rounded-lg shadow-lg"
                                alt="blog-image"
                              />
                            ),
                            table: ({ node, ...props }) => (
                              <table
                                {...props}
                                className="w-full prose max-w-full border-collapse text-center table-auto"
                              >
                                {props.children}
                              </table>
                            ),
                            th: ({ node, ...props }) => (
                              <th
                                {...props}
                                className="p-2 text-center border border-gray-300 bg-gray-200"
                              ></th>
                            ),
                            td: ({ node, ...props }) => (
                              <td
                                {...props}
                                className="p-2 text-center border border-gray-300"
                              ></td>
                            ),
                            li: ({ node, ...props }) => (
                              <td
                                {...props}
                                className="list-item text-center list-inside"
                              ></td>
                            ),
                          }}
                        >
                          {markdownContent}
                        </ReactMarkdown>

                        <hr className="my-4" />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Subscription Section for desktop interface */}
          <div className="w-[20%] space-y-[2vw] sticky top-[20vw] self-start max-[450px]:hidden">
            <div className="bg-white p-[1vw] w-[17vw]">
              <p className="text-[1.3vw] font-semibold text-left">
                SIGN UP TO BE NOTIFIED FOR MORE
              </p>
              <form>
                <div className="flex justify-end relative h-[4vw] bg-[red] mt-[2vw]">
                  <input
                    type="email"
                    placeholder="EMAIL HERE"
                    className="w-full text-[1.5vw] p-[0.4vw] border-[0.2vw] border-[#2703A5] placeholder:text-[1.5vw] focus:outline-none"
                  />
                  <div className="flex pl-[0.5vw] pr-[0.5vw] items-center absolute h-full bg-[#2703A5]">
                    <button
                      type="submit"
                      className="text-[2vw] text-orange-500 border-none cursor-pointer"
                    >
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Subscription Section for mobile interface */}
        <div className=" flex justify-center w-full space-y-[2vw] min-[450.1px]:hidden">
          <div className="bg-white p-[1vw] w-[40vw]">
            <p className="text-[3vw]/[3.5vw] font-semibold text-left">
              SIGN UP TO BE NOTIFIED FOR MORE
            </p>
            <form>
              <div className="flex justify-end relative h-[6vw] bg-[red] mt-[2vw]">
                <input
                  type="email"
                  placeholder="EMAIL HERE"
                  required
                  className="w-full text-[2.5vw] p-[0.4vw] border-[0.2vw] border-[#2703A5] placeholder:text-[2.5vw] focus:outline-none"
                />
                <div className="flex justify-center pl-[0.5vw] pr-[0.5vw] items-center absolute h-full bg-[#2703A5] w-[6vw]">
                  <button
                    type="submit"
                    className="text-[3vw] text-orange-500 border-none cursor-pointer"
                  >
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Carousel Section */}
        <BlogsCarousel />

        {/* Call to Action Section */}
        <CallToActionSection
          Content="We would love to hear more about your project"
          CallToAction="Let's Talk"
          Title="Work With Us"
          lang={lang}
        />

        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
}

export default BlogPost;
