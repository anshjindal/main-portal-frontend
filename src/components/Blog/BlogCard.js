import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog, lang }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${lang}/${blog.slug}`); // Navigate to the blog's detailed page
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick} // Make the entire card clickable
    >
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{
          backgroundImage: `url(${blog.imageUrl})`,
        }}
      ></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex justify-between w-full">
            <p className="text-sm text-[#666666]">{blog.tags}</p>
            <p className="text-sm text-[#666666]">{blog.timeToRead} Mins</p>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">{blog.title[lang]}</h2>
        <p className="text-gray-700">{blog.shortDesc[lang]}</p>
      </div>
    </div>
  );
};

export default BlogCard;
