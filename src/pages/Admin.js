import React, { useState } from "react";
import MarkdownEditor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom"; // Assuming you use this to get the language from URL params
import AdminData from "../content/Admin/Admin";

const Admin = () => {
  const [description, setDescription] = useState({ text: "", html: "" });
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState("");
  const [errors, setErrors] = useState({});
  const [Loading, setLoading] = useState(false);
  const { lang } = useParams(); // Language selected

  // Get the content based on the selected language (default to 'en')
  const content = AdminData[lang] || AdminData["en"];

  // Function to handle slug generation (remove spaces and replace with '-')
  const handleSlugChange = (e) => {
    const inputSlug = e.target.value;
    const lowercaseInput = inputSlug.toLowerCase();
    const cleanedInput = lowercaseInput.replace(/[^a-z0-9\- ]/g, "");
    const singleSpaceInput = cleanedInput.replace(/\s+/g, " ");
    const formattedSlug = singleSpaceInput
      .trim()
      .replace(/\s/g, "-")
      .replace(/-+/g, "-");
    setSlug(formattedSlug);
  };

  // Validation before submitting the form
  const validateForm = () => {
    const newErrors = {};
    const languageErrors = AdminData[lang].errors; // Get errors based on selected language

    if (!title.trim()) newErrors.title = languageErrors.title;
    if (!slug.trim()) newErrors.slug = languageErrors.slug;
    if (!author.trim()) newErrors.author = languageErrors.author;
    if (!description.text.trim())
      newErrors.description = languageErrors.description;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Run validation
    if (!validateForm()) {
      setLoading(false);
      return toast.error("Please fill out all fields", { duration: 5000 });
    }

    const blogData = {
      title,
      slug,
      markdownContent: description.text,
      author,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_WOUESSI_API_URL}/api/blog`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        return toast.error(data?.message, { duration: 5000 });
      }

      setTitle("");
      setSlug("");
      setAuthor("");
      setDescription({ text: "", html: "" });
      setErrors({});
      setLoading(false);

      return toast.success("Blog created successfully!", { duration: 5000 });
    } catch (error) {
      setLoading(false);
      return toast.error(error.message, { duration: 5000 });
    }
  };

  return (
    <>
      <div className="!z-50">
        <Toaster position="top-right" />
      </div>
      <div className="page-background max-w-6xl mx-auto px-2">
        <h1 className="text-3xl font-bold mb-4">{content.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Blog Title Input */}
          <div>
            <label className="block text-lg font-semibold">
              {content.InputTitle}
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full p-3 my-3 border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
              placeholder="Enter the blog title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          {/* Slug Input */}
          <div>
            <label className="block text-lg font-semibold">
              {content.InputSlug}
            </label>
            <input
              type="text"
              value={slug}
              onChange={handleSlugChange}
              className={`w-full p-3 my-3 border ${
                errors.slug ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
              placeholder="Generated slug"
              maxLength={50}
            />
            {errors.slug && (
              <p className="text-red-500 text-sm">{errors.slug}</p>
            )}
          </div>

          {/* Author Input */}
          <div>
            <label className="block text-lg font-semibold">
              {content.InputAuthor}
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className={`w-full p-3 my-3 border ${
                errors.author ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
              placeholder="Enter the author's name"
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author}</p>
            )}
          </div>
        </div>

        {/* Markdown Editor */}
        <MarkdownEditor
          value={description.text}
          onChange={(ev) => setDescription({ text: ev.text, html: ev.html })}
          style={{ width: "100%", height: "400px", marginTop: "1em" }}
          renderHTML={(text) => (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {text}
            </ReactMarkdown>
          )}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-blue-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-blue-600 active:scale-105 mt-10 mb-10 disabled:scale-100 disabled:bg-opacity-65"
            onClick={handleSubmit}
            disabled={Loading}
          >
            {Loading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <>{AdminData[lang].SubmitButtonText}</>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Admin;
