import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const BlogSidebar = () => {
  const { lang, slug } = useParams(); // Get the language and slug from the URL
  const [activeIndex, setActiveIndex] = useState(null);
  const [blogData, setBlogData] = useState([]);

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
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="w-[20%] space-y- sticky top-[20vw] self-start text-left max-[450px]:hidden">
      <h1 className="font-semibold text-lg text-center underline underline-offset-2 md:text-xl mb-5">
        Blogs :{" "}
      </h1>
      <Toaster position="top-right" />
      {blogData && blogData.length > 0 ? (
        blogData.map((blog, index) => {
          // Determine if the current blog matches the slug from useParams
          const isActive = blog.slug === slug;

          return (
            <div key={index} className="relative">
              <Link
                to={`/${lang}/${blog.slug}`} // Update the link based on the slug
                className={`border-[#250978] text-[#666666] rounded-full w-full text-center p-1 text-[1.3vw] bg-transparent cursor-pointer transition duration-300 max-[450px]:text-[2.2vw] flex items-center justify-center ${
                  isActive
                    ? "!bg-[#250978] text-white" // Change UI for active match
                    : "bg-transparent text-[#666666]"
                } hover:bg-[#250978] hover:text-white`}
                onClick={() => setActiveIndex(index)}
                style={{
                  whiteSpace: "nowrap", // Prevent text wrapping
                  overflow: "hidden", // Hide overflowed content
                  textOverflow: "ellipsis", // Show ellipsis for overflowed content
                  display: "inline-block", // Ensure the width respects the text content
                  maxWidth: "100%", // Ensure the container doesn't overflow
                }}
              >
                {/* Display the blog title based on the selected language */}
                {lang === "fr" ? blog.title.fr : blog.title.en}
              </Link>
            </div>
          );
        })
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
};

export default BlogSidebar;
