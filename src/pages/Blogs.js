import React, { useEffect, useState } from 'react';
import BlogPageLaptop from '../assets/Images/blog_page_laptop.webp';
import CallToActionSection from '../components/Reusable/CallToActionSection';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import BlogMetaDataRender from '../components/Blog/BlogMetaDataRender';
import toast, { Toaster } from 'react-hot-toast';
import AdminData from '../content/Admin/Admin';
import blogcontent from '../content/Blogs/BlogsPageData.json';
import BlogCard from '../components/Blog/BlogCard'; // Import the BlogCard component
import HeaderSection from '../components/Reusable/HeaderSection';

function Blogs() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { lang } = useParams();

  const content = AdminData[lang] || AdminData['en'];
  const BlogPageContent = blogcontent[lang];

  const navigate = useNavigate();

  const getBlogs = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_WOUESSI_API_URL}/api/blog`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
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
        <div className="w-[80%]">
          <HeaderSection
            Header={BlogPageContent.mainHeading}
            Content={BlogPageContent.description}
          />

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
          <CallToActionSection CallToAction="workwithus" lang={lang} />
        </div>
      </div>
    </>
  );
}

export default Blogs;
