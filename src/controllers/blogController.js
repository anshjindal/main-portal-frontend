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

   
const { lang = "en" } = useParams(); // Set default to "en"
const content = AdminData?.[lang] || AdminData['en'];
const BlogPageContent = blogcontent?.[lang] || blogcontent['en']

  // 🔹 Pagination & Search States
  const [page, setPage] = useState(1);
  const [perPage] = useState(12); // Default 12 blogs per page
  const [search, setSearch] = useState(""); // Search query
  const [totalPages, setTotalPages] = useState(1); // Store total pages

  const { slug } = useParams();
  const navigate = useNavigate();
 

  const getBlogs = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_WOUESSI_API_URL}/api/blog?page=${page}&perPage=${perPage}&search=${search}`;
      console.log("Fetching from:", apiUrl); //  Debug API URL
  
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await response.json();
      console.log("API Response:", data); // 🔹 Debug console log
  
      if (!response.ok) {
        return toast.error(data?.error, { duration: 5000 });
      }
  
      setBlogData(data?.blogs || []); //  Vérifie que c'est un tableau
      setTotalPages(data?.pagination?.totalPages || 1); //  Assure que `totalPages` ne soit pas undefined
  
    } catch (err) {
      return toast.error(err, { duration: 5000 });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBlogs();
  }, [page, search]);

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
  }, [page, search]); // Only re-fetch blogs when page/search changes
  
  useEffect(() => {
    getCategory();
  }, []);
  return {
    blogData: blogData || [], //  Default to an empty array
    loading,
    navigate,
    page,
    setPage,
    perPage,
    search,
    setSearch,
    totalPages: totalPages || 1, //  Default to 1
    categoryData: categoryData || [],
  };
};

export default useBlogController;
