import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog, lang = "en" }) => {
  const navigate = useNavigate();

  //  Add safety checks for missing properties
  if (!blog || !blog.translations || blog.translations.length === 0) {
    return <p className="text-gray-500">Invalid blog data</p>;
  }

  //  Ensure we select the correct translation based on `lang`
  const translation = blog.translations.find((t) => t.language === lang) || blog.translations[0];

  //  Fallback values
  const title = translation.title || "No Title Available";
  const shortDesc = translation.shortDesc || "No description provided.";
  const imageUrl = blog.imageUrl || "https://via.placeholder.com/300"; // Default placeholder

  const handleCardClick = () => {
    navigate(`/${lang}/${blog.slug}`);
  };

  return (
    <div
     className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer text-right"
      onClick={handleCardClick}
    >
      {/*  Ensure `imageUrl` is always present */}
      <div
        className="w-full h-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="p-6 text-left">
        <div className="flex gap-4 items-center mb-2">
          <p className="flex-1 text-sm text-[#666666] line-clamp-1 border-4 border-red-500">{blog.tags?.join(", ") || "No Tags"}</p>
          <p className="flex-none text-sm text-[#666666]">{blog.timeToRead || 0} Mins</p>
        </div>
        <h2 className="text-xl font-bold mb-2 line-clamp-1">{title}</h2>
        <p className="text-gray-700 line-clamp-2">{shortDesc}</p>
      </div>

    </div>
  );
};

export default BlogCard;
