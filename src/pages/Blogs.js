import React from 'react';
import { useParams } from 'react-router-dom';
import BlogMetaDataRender from '../components/Blog/BlogMetaDataRender';
import CallToActionSection from '../components/Reusable/CallToActionSection';
import HeaderSection from '../components/Reusable/HeaderSection';
import BlogCard from '../components/Blog/BlogCard';
import { Toaster } from 'react-hot-toast';
import { useBlogController } from '../controllers/blogController';
import Select from 'react-select';
import { colourStyles } from '../utils/select';
import ReactPaginate from 'react-paginate';

function Blogs() {
  const { lang } = useParams();

  const {
    blogData,
    loading,
    navigate,
    page,
    updatePage,
    totalPages,
    search,
    updateSearch,
    categoryOptions,
    selectedCategory,
    handleCategoryChange,
    perPage,
    setPerPage,
  } = useBlogController();

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
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search for a blog..."
              value={search}
              onChange={(e) => updateSearch(e.target.value)}
              className="flex-1 p-3 border rounded-md text-left w-full"
            />
            {/* Category Dropdown */}
            <Select
              options={categoryOptions}
              styles={colourStyles}
              onChange={handleCategoryChange}
              value={categoryOptions.find((option) => option.value === selectedCategory) || null}
              placeholder="Select a category..."
              className="w-full md:w-96" // Adjust the width as needed
              isClearable
            />
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
              onPageChange={(event)=>updatePage(event.selected + 1)}
              pageRangeDisplayed={1}
              pageCount={totalPages}
              previousLabel="Previous"
              renderOnZeroPageCount={null}
            />
            {/* select number of blogs per page */}
            <select
              name="pets" id="pet-select" className="bg-white px-4 py-1.5 rounded-md ml-4 text-black transition hover:outline-none focus:outline-none"
              value={perPage}
              onChange={(event)=>{
                const selectedValue = parseInt(event.target.value);

                if (selectedValue){
                  setPerPage(selectedValue);
                }
              }} >

              {[12, 15, 18, 21].map((item, index) => (
                <option className="hover:bg-[#2B00AC]" key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* Call-To-Action */}
          <CallToActionSection CallToAction="workwithus" lang={lang} />
        </div>
      </div>
    </>
  );
}

export default Blogs;