import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import AdminData from '../content/Admin/Admin';
import blogcontent from '../content/Blogs/BlogsPageData.json';
import toast from 'react-hot-toast';
import { useDebounce } from '../hooks/useDebounce';

export const useBlogController = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState([]);
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [totalPages, setTotalPages] = useState(1);

  const { lang = "en" } = useParams();
  const content = AdminData?.[lang] || AdminData['en'];
  const BlogPageContent = blogcontent?.[lang] || blogcontent['en'];

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const search = searchParams.get('search') || '';
  const [perPage, setPerPage] = useState(12);

  const debouncedSearch = useDebounce(search, 700);

  const { slug } = useParams();
  const navigate = useNavigate();

  // Function to update search params
  const updatePage = (newPage) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('page', newPage.toString());
    setSearchParams(updatedParams);
  };

  const updateSearch = (newSearch) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('search', newSearch);
    updatedParams.set('page', '1');
    setSearchParams(updatedParams);
  };

  const updateCategory = (category) => {
    const updatedParams = new URLSearchParams(searchParams);
    if (category) {
      updatedParams.set('category', category);
    } else {
      updatedParams.delete('category');
    }
    updatedParams.set('page', '1'); // Reset to first page when category changes
    setSearchParams(updatedParams);
  };

  const getBlogs = async () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    try {
      const currentCategory = searchParams.get('category') || '';
  
      let apiUrl = `${process.env.REACT_APP_WOUESSI_API_URL}/api/blog?page=${page}&perPage=${perPage}&search=${debouncedSearch}`;
      
      if (currentCategory) {
        apiUrl += `&category=${currentCategory}`;
      }
  
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await response.json();
      if (!response.ok) {
        return toast.error(data?.error, { duration: 5000 });
      }
  
      setBlogData(data?.blogs || []);
      setTotalPages(data?.pagination?.lastPage || 1);
  
    } catch (err) {
      return toast.error(err, { duration: 5000 });
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    const categoryFromParams = searchParams.get('category') || '';
    setSelectedCategory(categoryFromParams);
  }, [searchParams]);

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
      setCategoryData(data?.categories);
    } catch (err) {
      return toast.error(err, { duration: 5000 });
    } finally {
      setLoadingCategory(false);
    }
  };

  useEffect(() => {    
    getBlogs();
  }, [page, debouncedSearch, selectedCategory, perPage]);

  useEffect(() => {
    getCategory();
  }, []);

  const categoryOptions = categoryData.map((item) => ({
    value: item.slug,
    label: item.translations[0]?.name,
  }));

  const handleCategoryChange = (selectedOption) => {
    updateCategory(selectedOption?.value || '');
  };

  return {
    blogData: blogData || [],
    loading,
    navigate,
    page,
    updatePage,
    perPage,
    setPerPage,
    search,
    updateSearch,
    selectedCategory,
    updateCategory,
    totalPages: totalPages || 1,
    categoryData: categoryData || [],
    categoryOptions,
    handleCategoryChange,
  };
};

export default useBlogController;