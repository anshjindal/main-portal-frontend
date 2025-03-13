import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export const useBlogController = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(true);

  const { lang = 'en', category = '' } = useParams();
  const [searchParams] = useSearchParams();

  const pageParam = Number(searchParams.get('page')) || 1;
  const searchParam = searchParams.get('search') || '';

  const [page, setPage] = useState(pageParam);
  const [perPage] = useState(12);
  const [search, setSearch] = useState(searchParam);
  const [debouncedSearch, setDebouncedSearch] = useState(searchParam);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
    }, 500);

    return () => clearTimeout(handler);
  }, [debouncedSearch]);

  const getBlogs = async () => {
    try {
      let apiUrl = `${process.env.REACT_APP_WOUESSI_API_URL}/api/blog?page=${page}&perPage=${perPage}&search=${search}`;

      if (category) {
        apiUrl = `${process.env.REACT_APP_WOUESSI_API_URL}/api/category/${category}?page=${page}&perPage=${perPage}&search=${search}`;
      }

      console.log('Fetching from:', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
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
    getCategory();
  }, []);

  useEffect(() => {
    getBlogs();
  }, [page, search, category]);

  return {
    blogData: blogData || [],
    loading,
    page,
    setPage,
    perPage,
    search: debouncedSearch,
    setDebouncedSearch,
    totalPages: totalPages || 1,
    categoryData: categoryData || [],
    navigate,
  };
};

export default useBlogController;
