import {JSX} from 'react';
import BlogCard from './BlogCard';

export type Blog = {
  _id: string;
  slug: string;
  imageUrl: string;
  tags: string[];
  timeToRead: number;
  title: { en: string; fr: string };
  shortDesc: { en: string; fr: string };
};


type BlogListProps = {
  loading: boolean;
  blogData: Blog[];
  lang: 'en' | 'fr';
};

const BlogList = ({ loading, blogData, lang }: BlogListProps): JSX.Element => (
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
);

export default BlogList;
