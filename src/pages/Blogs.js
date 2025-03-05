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
import { useBlogController } from '../controllers/blogController';

function Blogs() {
  const {
    // State
    blogData,
    loading,
    lang,
    content,
    BlogPageContent,
    categoryData,
    navigate,

    // Handlers
  } = useBlogController();

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

          <div className="mx-20">
            <div className="w-full flex gap-4 justify-start items-start">
              {categoryData.map((item)=>{
                return <button key={item?.slug} className="bg-[#2B00AC] bg-opacity-70 hover:bg-opacity-100 px-4 py-1.5 rounded-md text-white"> {item?.translations[0].name} </button>
              })}
            </div>
          </div>

          {/* Blog Cards Section */}
          <div className="mt-4 flex justify-center">
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
