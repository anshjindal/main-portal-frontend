import React, { useEffect, useState } from "react";
import "../styles/Blogpost.css";
import CallToActionSection from "../components/Reusable/CallToActionSection";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // for rendering tables, strikethrough, task lists, etc.
import rehypeRaw from "rehype-raw"; // to allow rendering raw HTML inside Markdown
import Contents from "../content/Layout/Footer.json";
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
  const [blogData, setBlogData] = useState([]);
  const [tags, setTags] = useState([]); // State to store tags
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
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
        // Extract tags from the blog data
        const allTags = data?.message.flatMap((blog) => blog.tags || []);
        setTags([...new Set(allTags)]); // Remove duplicates
      }
    } catch (err) {
      toast.error(err.message, { duration: 5000 });
      setError(err.message);
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
      : "Blog Post";

  return (
    <>
      <div className="!z-50">
        <Toaster position="top-right" />
      </div>
      <div className="flex justify-center max-[450px]:mt-0 page-background">
        <div className="w-[80%] max-[450px]:w-[100%]">
          <div className="flex">
            {/* Blog Content */}
            <div className="w-[70%] pl-[2vw] pr-[2vw] max-[450px]:w-[100%]  max-[450px]:p-[5vw]">
              {/* Blog Title and Image */}
              <div className="blog-list prose max-w-full text-left">
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
                      <div key={blog._id} className="mb-8">
                        <h1 className="text-3xl font-semibold mb-1 prose text-left">
                          {title}
                        </h1>

                        {/* Tags and Read Time */}
                        <div className="flex items-center justify-between mb-[1vw]">
                          <p className="text-sm text-gray-600 text-left">
                            <em>By {author}</em> |{" "}
                            <em>
                              {new Date(blog.createdAt).toLocaleDateString()}
                            </em>
                          </p>
                          <p className="text-sm text-gray-600">
                            {blogData[0]?.timeToRead || 5}{" "}
                            {lang === "en" ? "Mins" : "Mins"}
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

                        {/* Render Markdown content */}
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]} // Enables GFM (tables, task lists, etc.)
                          rehypePlugins={[rehypeRaw]} // Allows raw HTML rendering
                          components={{
                            img: ({ node, ...props }) => (
                              <img
                                {...props}
                                className="w-[100%] h-auto mx-auto object-contain rounded-lg shadow-lg"
                                alt="blog-image"
                              />
                            ),
                            table: ({ node, ...props }) => (
                              <table
                                {...props}
                                className="w-full prose max-w-full border-collapse text-left table-auto"
                              >
                                {props.children}
                              </table>
                            ),
                            th: ({ node, ...props }) => (
                              <th
                                {...props}
                                className="p-2 text-left prose border border-gray-300 bg-gray-200"
                              ></th>
                            ),
                            td: ({ node, ...props }) => (
                              <td
                                {...props}
                                className="p-2 text-left prose border border-gray-300"
                              ></td>
                            ),
                            li: ({ node, ...props }) => (
                              <li
                                {...props}
                                className="list-item prose text-left list-outside"
                              ></li>
                            ),
                          }}
                        >
                          {markdownContent}
                        </ReactMarkdown>
                        <hr className="my-4" />

                        {}
                        <button
                          className="mt-[2vw] border-[#D26B2F] text-[#D26B2F] border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1.3vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#D26B2F] transition duration-300 max-[450px]:text-[2vw]"
                          disabled
                        >
                          SEO SERVICES
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Subscription Section for desktop interface */}
            <div className="w-[30%] ml-[1vw] space-y-[2vw] top-[20vw] self-start max-[450px]:hidden">
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
      <div className="flex justify-center w-full space-y-[2vw] min-[450.1px]:hidden">
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
            {/* Call to Action Section */}
            <CallToActionSection
          CallToAction="workwithus"
          lang={lang}
        />
            
         
        </div>
      </div>

    </>
  );
}

export default BlogPost;
