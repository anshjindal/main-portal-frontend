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

  const { lang = 'en', page: pageParam } = useParams();
  const content = AdminData?.[lang] || AdminData['en'];
  const BlogPageContent = blogcontent?.[lang] || blogcontent['en'];

  // 🔹 Pagination & Search States
  const [page, setPage] = useState(Number(pageParam) || 1);
  const [perPage] = useState(12);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  // 🔹 Debouncer Logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
    }, 500); // 500ms debounce delay

    return () => clearTimeout(handler); // Cleanup timeout
  }, [debouncedSearch]);

  const getBlogs = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_WOUESSI_API_URL}/api/blog?page=${page}&perPage=${perPage}&search=${search}`;
      console.log('Fetching from:', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      console.log('API Response:', data);

      if (!response.ok) {
        return toast.error(data?.error, { duration: 5000 });
      }

      setBlogData(data?.blogs || []);
      setTotalPages(data?.pagination?.lastPage || 1);
    } catch (err) {
      return toast.error(err.message || 'Failed to fetch blogs', { duration: 5000 });
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Category Fetch Logic
  const getCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_WOUESSI_API_URL}/api/category`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const data = await response.json();

      if (!response?.ok) {
        return toast.error(data?.error, { duration: 5000 });
      }
      setCategoryData(data?.categories || []);
    } catch (err) {
      return toast.error(err.message || 'Failed to fetch categories', { duration: 5000 });
    } finally {
      setLoadingCategory(false);
    }
  };

  useEffect(() => {
    getCategory();  // Ensure categories are fetched when component loads
  }, []);

  // 🔹 Sync URL with Pagination
  useEffect(() => {
    navigate(`/${lang}/Blogs/${page}`);
  }, [page, lang, navigate]);

  // 🔹 Fetch Blogs when `page` or `search` changes
  useEffect(() => {
    getBlogs();
  }, [page, search]);

  return {
    blogData: blogData || [],
    loading,
    navigate,
    page,
    setPage,
    perPage,
    search: debouncedSearch,
    setDebouncedSearch,
    totalPages: totalPages || 1,
    categoryData: categoryData || [], // 🔹 Restored Category Data
  };
};

export default useBlogController;
