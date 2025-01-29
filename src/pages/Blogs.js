import React, { useEffect, useState } from "react";
import BlogPageLaptop from "../assets/Images/blog_page_laptop.webp";
import CallToActionSection from "../components/Reusable/CallToActionSection";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import BlogMetaDataRender from "../components/Blog/BlogMetaDataRender";
import toast, { Toaster } from "react-hot-toast";
import AdminData from "../content/Admin/Admin";
import blogcontent from "../content/Blogs/BlogsPageData.json";
import BlogCard from "../components/Blog/BlogCard"; // Import the BlogCard component

function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { lang } = useParams();

  const content = AdminData[lang] || AdminData["en"];
  const BlogPageContent = blogcontent[lang];

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

  const remainingBlogs = blogData.slice(3);

  return (
    <>
      <div className="!z-50">
        <Toaster position="top-right" />
      </div>
      <BlogMetaDataRender />
      <div className="flex justify-center page-background">
        <div className="w-full">
          <div className="flex mb-[5vw] justify-center text-black text-left">
            <div className="w-[80%] max-[450px]:mt-[5vw] max-[450px]:mb-[5vw] max-[450px]:w-full">
              <div className="flex mt-[1vw] items-center max-[450px]:flex-col max-[450px]:space-y-[8vw]">
                <h1 className="text-[4vw]/[5vw] text-left w-[40vw] font-bold max-[450px]:text-[7vw]/[7.5vw] max-[450px]:w-[80%] max-[450px]:mt-[3vw]">
                  {BlogPageContent.mainHeading}
                </h1>
                <p className="w-[40vw] text-[1.1vw] text-left text-black float-right max-[450px]:text-[3vw] max-[450px]:w-[80%]">
                  {BlogPageContent.description}
                </p>
              </div>
            </div>
          </div>

          {/* Blog Cards Section */}
          <div className="flex justify-center">
            <div className="w-[80vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogData.map((blog, index) => (
                <BlogCard
                  key={index}
                  blog={blog}
                  lang={lang}
                  content={content}
                />
              ))}
            </div>
          </div>
          
          {/* Last Div */}
          <CallToActionSection
          CallToAction="workwithus"
          lang={lang}
        />
        </div>
      </div>
    </>
  );
}

export default Blogs;