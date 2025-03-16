import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogMetaDataRender from '../components/Blog/BlogMetaDataRender';
import CallToActionSection from '../components/Reusable/CallToActionSection';
import HeaderSection from '../components/Reusable/HeaderSection';
import BlogCard from '../components/Blog/BlogCard';
import toast, { Toaster } from 'react-hot-toast';
import ReactPaginate from 'react-paginate';
import { useBlogController } from '../controllers/blogController';

function Blogs() {
  const { lang, slug } = useParams();

  const {
    blogData,
    loading,
    navigate,
    page,
    perPage,
    updatePage,
    totalPages,
    search,
    updateSearch,
    categoryData,
  } = useBlogController();

  const handlePageClick = (event) => {
    updatePage(event.selected + 1);
  };

  return (
    <>
      <div className="!z-50">
        <Toaster position="top-right" />
      </div>

      <BlogMetaDataRender />

      <div className="flex justify-center page-background">
        <div className="w-[80%]">
          {/* Page Title */}
          <HeaderSection
            Header="Explore Our Blogs"
            Content="Discover insights, stories, and updates"
          />

          {/* Search Bar */}
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Search for a blog..."
              value={search}
              onChange={(e) => updateSearch(e.target.value)}
              className="p-3 border rounded-md w-[50%] text-left"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="mx-20">
            <div className="w-full flex gap-4 justify-start items-start">
              {categoryData.map((item) => (
                <button
                  key={item?.slug}
                  className="bg-[#2B00AC] bg-opacity-70 hover:bg-opacity-100 px-4 py-1.5 rounded-md text-white"
                  onClick={() => navigate(`/category/${item?.slug}`)}
                >
                  {item?.translations[0]?.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Cards Section */}
          <div className="mt-8 flex justify-center">
            <div className="w-[80vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                <p>Loading blogs...</p>
              ) : (
                blogData.map((blog, index) => {
                  console.log('Blog Data:', blog);
                  return <BlogCard key={index} blog={blog} lang={lang} />;
                })
              )}
            </div>
          </div>

          {/* Pagination Controls with useSearchParams */}
          <div className="flex justify-center mt-6">
          <ReactPaginate
            className="flex space-x-2 text-sm"
            pageClassName="border border-gray-300 px-4 py-1.5 rounded-md text-[#2B00AC] hover:bg-gray-200 transition"
            activeClassName="bg-[#2B00AC] bg-opacity-70 hover:bg-opacity-100 px-4 py-1.5 rounded-md text-white transition"
            previousClassName="bg-[#2B00AC] bg-opacity-70 hover:bg-opacity-100 px-4 py-1.5 rounded-md text-white transition"
            nextClassName="bg-[#2B00AC] bg-opacity-70 hover:bg-opacity-100 px-4 py-1.5 rounded-md text-white transition"
            breakClassName="px-4 py-1.5 rounded-md text-[#2B00AC]"
            disabledClassName="border border-gray-300 opacity-50 cursor-not-allowed transition"
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={totalPages}
            previousLabel="Previous"
            renderOnZeroPageCount={null}
          />
        </div>
          
          {/* Call-To-Action */}
          <CallToActionSection CallToAction="workwithus" lang={lang} />
        </div>
      </div>
    </>
  );
}

export default Blogs;
