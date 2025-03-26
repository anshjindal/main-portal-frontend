import {JSX } from 'react';
import { useNavigate } from 'react-router-dom';

type BlogCardProps = {
  blog: {
    slug: string;
    imageUrl: string;
    tags: string[];
    timeToRead: number;
    title: {
      en: string;
      fr: string;
    };
    shortDesc: {
      en: string;
      fr: string;
    };
  };
  lang: 'en' | 'fr';
};

const BlogCard = ({ blog, lang }: BlogCardProps): JSX.Element => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/${lang}/${blog.slug}`);
  };

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
              {blog.tags.join(', ')}
            </p>
            <p className="flex-none text-sm text-[#666666]">
              {blog.timeToRead} Mins
            </p>
          </div>
        </div>
        <h2 className="text-lg text-start font-bold line-clamp-2 mb-2">
          {blog.title[lang]}
        </h2>
        <p className="text-gray-700 text-start line-clamp-2">
          {blog.shortDesc[lang]}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
