import React from 'react';
import { useParams } from 'react-router-dom';
import BlogMetaDataRender from '../components/Blog/BlogMetaDataRender';
import CallToActionSection from '../components/Reusable/CallToActionSection';
import HeaderSection from '../components/Reusable/HeaderSection';
import BlogCard from '../components/Blog/BlogCard';
import toast, { Toaster } from 'react-hot-toast';
import { useBlogController } from '../controllers/blogController';

function Blogs() {
  const { lang } = useParams();

  const {
    blogData,
    loading,
    navigate,
    page,
    setPage,
    totalPages,
    search,
    setDebouncedSearch,
    categoryData, // 🔹 Category Data Restored
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
            Header="Explore Our Blogs"
            Content="Discover insights, stories, and updates"
          />

          {/* Search Bar */}
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Search for a blog..."
              value={search}
              onChange={(e) => setDebouncedSearch(e.target.value)}
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
                blogData.map((blog, index) => (
                  <BlogCard key={index} blog={blog} lang={lang} />
                ))
              )}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="mx-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">{`Page ${page} of ${totalPages}`}</span>
            <button
              onClick={() =>
                setPage((prev) => (prev < totalPages ? prev + 1 : prev))
              }
              disabled={page >= totalPages}
              className="mx-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

          {/* Call-To-Action */}
          <CallToActionSection CallToAction="workwithus" lang={lang} />
        </div>
      </div>
    </>
  );
}

export default Blogs;
