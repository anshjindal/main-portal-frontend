import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import AdminData from '../content/Admin/Admin';
import blogcontent from '../content/Blogs/BlogsPageData.json';
import toast from 'react-hot-toast';
import { useDebounce } from '../hooks/useDebounce';

import { MultiValue, ActionMeta } from 'react-select';


// Types
type Blog = {
  _id: string;
  slug: string;
  imageUrl: string;
  tags: string[];
  timeToRead: number;
  title: { en: string; fr: string };
  shortDesc: { en: string; fr: string };
};

type Category = {
  slug: string;
  translations: { name: string }[];
};

type Params = {
  lang?: 'en' | 'fr';
  slug?: string;
};

export const useBlogController = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categoryData, setCategoryData] = useState<Category[]>([]);
  const [loadingCategory, setLoadingCategory] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(12);

  const { lang = 'en', slug } = useParams<Params>();
  const content = AdminData?.[lang] || AdminData['en'];
  const BlogPageContent = blogcontent?.[lang] || blogcontent['en'];

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const search = searchParams.get('search') || '';
  const debouncedSearch = useDebounce(search, 700);
  const navigate = useNavigate();

  // --- Update query params ---
  const updatePage = (newPage: number) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('page', newPage.toString());
    setSearchParams(updatedParams);
  };

  const updateSearch = (newSearch: string) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('search', newSearch);
    updatedParams.set('page', '1');
    setSearchParams(updatedParams);
  };

  const updateCategory = (category: string) => {
    const updatedParams = new URLSearchParams(searchParams);
    if (category) {
      updatedParams.set('category', category);
    } else {
      updatedParams.delete('category');
    }
    updatedParams.set('page', '1');
    setSearchParams(updatedParams);
  };

  // --- Get blogs ---
  const getBlogs = async () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    try {
      const currentCategory = searchParams.get('category') || '';
      let apiUrl = `${process.env.REACT_APP_WOUESSI_API_URL}/api/blog?page=${page}&perPage=${perPage}&search=${debouncedSearch}`;

      if (currentCategory) {
        apiUrl += `&category=${currentCategory}`;
      }

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
    } catch (err: any) {
      toast.error(err.message || 'An error occurred', { duration: 5000 });
    } finally {
      setLoading(false);
    }
  };

  // --- Get categories ---
  const getCategory = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_WOUESSI_API_URL}/api/category`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (!response.ok) {
        return toast.error(data?.error, { duration: 5000 });
      }

      setCategoryData(data?.categories || []);
    } catch (err: any) {
      toast.error(err.message || 'Error fetching categories', { duration: 5000 });
    } finally {
      setLoadingCategory(false);
    }
  };

  // --- Effects ---
  useEffect(() => {
    const categoryFromParams = searchParams.get('category') || '';
    setSelectedCategory(categoryFromParams);
  }, [searchParams]);

  useEffect(() => {
    getBlogs();
  }, [page, debouncedSearch, selectedCategory, perPage]);

  useEffect(() => {
    getCategory();
  }, []);

  type OptionType = {
    value: string;
    label: string;
  };
  
  
  const categoryOptions = categoryData.map((item) => ({
    value: item.slug,
    label: item.translations[0]?.name,
  }));

const handleCategoryChange = (
  newValue: MultiValue<OptionType>,
  actionMeta: ActionMeta<OptionType>
) => {
  const selectedOption = newValue[0]; // on prend le premier si plusieurs
  updateCategory(selectedOption?.value || '');
};

  return {
    blogData,
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
    totalPages,
    categoryData,
    categoryOptions,
    handleCategoryChange,
  };
};

export default useBlogController;
