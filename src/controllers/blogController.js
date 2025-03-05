import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminData from '../content/Admin/Admin';
import blogcontent from '../content/Blogs/BlogsPageData.json';
import toast from 'react-hot-toast';

export const useBlogController = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(true);

  const { lang } = useParams();
  const content = AdminData[lang] || AdminData['en'];
  const BlogPageContent = blogcontent[lang];

  const navigate = useNavigate();

  const getBlogs = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_WOUESSI_API_URL}/api/blog`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (!response?.ok) {
        return toast.error(data?.error, { duration: 5000 });
      }

      setBlogData(data?.blogs); // Access the blogs array from the response
    } catch (err) {
      return toast.error(err, { duration: 5000 });
    } finally {
      setLoading(false);
    }
  };

  const getCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_WOUESSI_API_URL}/api/category`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (!response?.ok) {
        return toast.error(data?.error, { duration: 5000 });
      }

      setCategoryData(data?.categories); // Access the blogs array from the response
    } catch (err) {
      return toast.error(err, { duration: 5000 });
    } finally {
      setLoadingCategory(false);
    }
  };

  useEffect(() => {
    getBlogs();
    getCategory();
  }, []);

  return {
    // State
    blogData,
    loading,
    lang,
    content,
    BlogPageContent,
    navigate,
    categoryData,

    // Handlers
  };
};

export default useBlogController;
