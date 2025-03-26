import React from 'react';
import { useParams } from 'react-router-dom';
import BlogMetaDataRender from '../components/Blog/BlogMetaDataRender';
import CallToActionSection from '../components/Reusable/CallToActionSection';
import HeaderSection from '../components/Reusable/HeaderSection';
import BlogList from '../components/Blog/BlogList';
import { Toaster } from 'react-hot-toast';
import useBlogController from '../controllers/blogController';

import SearchBar from '../components/Reusable/SearchBar';
import CategoryFilter from '../components/Reusable/CategoryFilter';
import Pagination from '../components/Reusable/Pagination';

type RouteParams = {
  lang: 'en' | 'fr';
};


const Blogs: React.FC = () => {
  const { lang = 'en' } = useParams<RouteParams>();
const validatedLang = lang === 'fr' ? 'fr' : 'en';


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

          {/* Search & Category Filter */}
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <SearchBar search={search} updateSearch={updateSearch} />
            <CategoryFilter
              categoryOptions={categoryOptions}
              selectedCategory={selectedCategory}
              handleCategoryChange={handleCategoryChange}
            />
          </div>

          {/* Blog List */}
          <BlogList loading={loading} blogData={blogData} lang={validatedLang} />

          {/* Pagination */}
          <Pagination page={page} totalPages={totalPages} updatePage={updatePage} />

          {/* Call-To-Action */}
          <CallToActionSection CallToAction="workwithus" lang={lang} />
        </div>
      </div>
    </>
  );
};

export default Blogs;
