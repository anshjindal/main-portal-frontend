import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog, lang }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${lang}/${blog.slug}`);
  };

  // Extract title and description safely
  const title =
    blog?.title?.[lang] || // Format 1
    blog?.translations?.find((t) => t.language === lang)?.title || // Format 2
    'No Title Available';

  const shortDesc =
    blog?.shortDesc?.[lang] || // Format 1
    blog?.translations?.find((t) => t.language === lang)?.shortDesc || // Format 2
    'No Description Available';

  // Return fallback if no content exists
  if (!title && !shortDesc) {
    console.warn(`Missing content for language: ${lang}`, blog);
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 text-red-500">
        <p>Content unavailable in {lang}</p>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{
          backgroundImage: `url(${blog.imageUrl})`,
        }}
      ></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex gap-4 justify-start items-center w-full">
            <p className="flex-1 text-sm line-clamp-1 text-start text-[#666666]">
              {blog.tags?.join(', ') || 'No Tags'}
            </p>
            <p className="flex-none text-sm text-[#666666]">
              {blog.timeToRead} Mins
            </p>
          </div>
        </div>
        <h2 className="text-lg text-start font-bold line-clamp-2 mb-2">
          {title}
        </h2>
        <p className="text-gray-700 text-start line-clamp-2">
          {shortDesc}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
