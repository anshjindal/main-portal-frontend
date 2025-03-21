import React from 'react';
import BlogCard from './BlogCard';

const BlogList = ({ loading, blogData, lang }) => (
  <div className="mt-8 flex justify-center">
    <div className="w-[80vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        blogData.map((blog, index) => <BlogCard key={index} blog={blog} lang={lang} />)
      )}
    </div>
  </div>
);

export default BlogList;
