import React, { useEffect, useState, JSX} from 'react';

import '../styles/Blogpost.css';
import CallToActionSection from '../components/Reusable/CallToActionSection';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Contents from '../content/Layout/Footer.json';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

type RouteParams = {
  lang?: 'en' | 'fr';
  slug?: string;
};

type BlogTranslation = {
  language: string;
  title: string;
  markdownContent: string;
  author: string;
};

type BlogItem = {
  _id: string;
  createdAt: string;
  timeToRead: number;
  tags?: string[];
  translations: BlogTranslation[];
};

function BlogPost(): JSX.Element {
  const [blogData, setBlogData] = useState<BlogItem[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { lang = 'en', slug } = useParams<RouteParams>();
  const Content = Contents[lang] || Contents['en'];
  const navigate = useNavigate();

  const fetchBlogData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_WOUESSI_API_URL}/api/blog/${slug}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (response.status === 404) {
        toast.error(data?.error || 'Blog not found', { duration: 5000 });
        setTimeout(() => navigate('/en/error'), 3000);
      } else {
        setBlogData(data?.message);
        const allTags: string[] = data?.message.flatMap((blog: BlogItem) => blog.tags || []);
        setTags([...new Set(allTags)]);
      }
    } catch (err: any) {
      toast.error(err.message, { duration: 5000 });
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const blogUrl = window.location.href;
  const title = blogData[0]?.translations.find((t) => t.language === lang)?.title || 'Blog Post';

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex justify-center max-[450px]:mt-0 page-background">
        <div className="w-[80%] max-[450px]:w-[100%]">
          <div className="flex">
            <div className="w-[70%] pl-[2vw] pr-[2vw] max-[450px]:w-[100%] max-[450px]:p-[5vw]">
              <div className="blog-list prose max-w-full text-left">
                {blogData.map((blog) => {
                  const translation = blog.translations.find((t) => t.language === lang);
                  if (!translation) return null;

                  return (
                    <div key={blog._id} className="mb-8">
                      <h1 className="text-3xl font-semibold mb-1 prose text-left">
                        {translation.title}
                      </h1>
                      <div className="flex items-center justify-between mb-[1vw]">
                        <p className="text-sm text-gray-600 text-left">
                          <em>By {translation.author}</em> |{' '}
                          <em>{new Date(blog.createdAt).toLocaleDateString()}</em>
                        </p>
                        <p className="text-sm text-gray-600">
                          {blog.timeToRead || 5} {lang === 'en' ? 'Mins' : 'Mins'}
                        </p>
                        <div className="space-x-2">
                          <FacebookShareButton url={blogUrl}>
                            <FacebookIcon className="h-5 w-5 lg:h-7 lg:w-7" round />
                          </FacebookShareButton>
                          <TwitterShareButton url={blogUrl} title={title}>
                            <TwitterIcon className="h-5 w-5 lg:h-7 lg:w-7" round />
                          </TwitterShareButton>
                          <LinkedinShareButton url={blogUrl} title={title}>
                            <LinkedinIcon className="h-5 w-5 lg:h-7 lg:w-7" round />
                          </LinkedinShareButton>
                          <WhatsappShareButton url={blogUrl} title={title}>
                            <WhatsappIcon className="h-5 w-5 lg:h-7 lg:w-7" round />
                          </WhatsappShareButton>
                        </div>
                      </div>

                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                          img: (props) => (
                            <img
                              {...props}
                              className="w-full h-auto mx-auto object-contain rounded-lg shadow-lg"
                              alt="blog-image"
                            />
                          ),
                          table: (props) => (
                            <table {...props} className="w-full border-collapse text-left" />
                          ),
                          th: (props) => (
                            <th {...props} className="p-2 border bg-gray-200" />
                          ),
                          td: (props) => (
                            <td {...props} className="p-2 border" />
                          ),
                          li: (props) => <li {...props} className="list-item list-outside" />,
                        }}
                      >
                        {translation.markdownContent}
                      </ReactMarkdown>

                      <hr className="my-4" />

                      <button
                        className="mt-[2vw] border-[#D26B2F] text-[#D26B2F] border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1.3vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#D26B2F] transition duration-300 max-[450px]:text-[2vw]"
                        disabled
                      >
                        SEO SERVICES
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop newsletter form */}
            <div className="w-[30%] ml-[1vw] space-y-[2vw] top-[20vw] self-start max-[450px]:hidden">
              <NewsletterForm />
            </div>
          </div>

          {/* Mobile newsletter form */}
          <div className="flex justify-center w-full space-y-[2vw] min-[450.1px]:hidden">
            <NewsletterForm mobile />
          </div>

          <CallToActionSection CallToAction="workwithus" lang={lang} />
        </div>
      </div>
    </>
  );
}

export default BlogPost;

// Component for the newsletter section (can be moved elsewhere)
const NewsletterForm = ({ mobile = false }: { mobile?: boolean }) => (
  <div className={`bg-white p-[1vw] ${mobile ? 'w-[40vw]' : 'w-[17vw]'}`}>
    <p className={`${mobile ? 'text-[3vw]/[3.5vw]' : 'text-[1.3vw]'} font-semibold text-left`}>
      SIGN UP TO BE NOTIFIED FOR MORE
    </p>
    <form>
      <div className={`flex justify-end relative ${mobile ? 'h-[6vw] mt-[2vw]' : 'h-[4vw] mt-[2vw]'}`}>
        <input
          type="email"
          placeholder="EMAIL HERE"
          required
          className={`w-full ${mobile ? 'text-[2.5vw] placeholder:text-[2.5vw]' : 'text-[1.5vw] placeholder:text-[1.5vw]'} p-[0.4vw] border-[0.2vw] border-[#2703A5] focus:outline-none`}
        />
        <div className={`flex items-center absolute h-full bg-[#2703A5] ${mobile ? 'w-[6vw]' : 'pl-[0.5vw] pr-[0.5vw]'}`}>
          <button type="submit" className={`${mobile ? 'text-[3vw]' : 'text-[2vw]'} text-orange-500`}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </form>
  </div>
);
