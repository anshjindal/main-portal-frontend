import React, { useState } from 'react';
import MarkdownEditor from 'react-markdown-editor-lite';
import ReactMarkdown from 'react-markdown';
import 'react-markdown-editor-lite/lib/index.css';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom'; // Assuming you use this to get the language from URL params
import AdminData from '../content/Admin/Admin';
import { BsClipboard2CheckFill } from 'react-icons/bs';

const Admin = () => {
  const [description, setDescription] = useState({ text: '', html: '' });
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [author, setAuthor] = useState('');
  const [timeToRead, setTimeToRead] = useState(0);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [shortDesc, setshortDesc] = useState('');
  const [errors, setErrors] = useState({});
  const [Loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [cloudinaryPubicUrl, setcloudinaryPubicUrl] = useState('');
  const [cloudinaryAssetId, setcloudinaryAssetId] = useState('');
  const { lang } = useParams();

  const content = AdminData[lang] || AdminData['en'];

  const handleSlugChange = (e) => {
    const inputSlug = e.target.value
      .toLowerCase()
      .replace(/[^a-z0-9\- ]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s/g, '-')
      .replace(/-+/g, '-');
    setSlug(inputSlug);
    if (inputSlug) clearError('slug');
  };

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
      clearError('tags');
    }
  };

  const handleRemoveTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  const clearError = (field) => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateForm = () => {
    const newErrors = {};
    const languageErrors = AdminData[lang].errors;

    if (!title.trim()) newErrors.title = languageErrors.title;
    if (!slug.trim()) newErrors.slug = languageErrors.slug;
    if (!author.trim()) newErrors.author = languageErrors.author;
    if (!description.text.trim())
      newErrors.description = languageErrors.description;
    if (!imageUrl) newErrors.image = languageErrors.image;

    if (!timeToRead || isNaN(timeToRead)) {
      newErrors.timeToRead = languageErrors.timeToRead;
    } else if (timeToRead <= 0 || timeToRead > 60) {
      newErrors.timeToRead = languageErrors.validateTimeToRead;
    }

    if (!tags || tags.length === 0) {
      newErrors.tags = languageErrors.minTags;
    } else if (tags.length > 10) {
      newErrors.tags = languageErrors.maxTags;
    }

    if (!shortDesc.trim() || shortDesc.length < 20 || shortDesc.length > 500) {
      newErrors.desc = languageErrors.shortDesc;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (setter, field, value) => {
    setter(value);
    if (value.trim()) clearError(field);
  };

  const handleImageUpload = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUDNAME,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        sources: [
          'local',
          'url',
          'camera',
          'dropbox',
          'shutterstock',
          'google_drive',
          'unsplash',
        ],
        showAdvancedOptions: true,
        cropping: true,
        multiple: false,
      },
      (error, result) => {
        if (result.event === 'success') {
          setImageUrl(result.info.secure_url);
          setcloudinaryPubicUrl(result.info.public_id);
          setcloudinaryAssetId(result.info.asset_id);
          clearError('image');
          toast.success('Image uploaded successfully!');
        } else if (error) {
          toast.error('Error uploading image. Please try again.');
        }
      }
    );
    widget.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return toast.error('Please fill out all fields', { duration: 5000 });
    }

    const blogData = {
      title,
      slug,
      timeToRead,
      imageUrl,
      cloudinaryPubicUrl,
      cloudinaryAssetId,
      tags,
      shortDesc,
      markdownContent: description.text,
      author,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_WOUESSI_API_URL}/api/blog`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(blogData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setLoading(false);
        return toast.error(data?.message, { duration: 5000 });
      }

      setTitle('');
      setSlug('');
      setAuthor('');
      setDescription({ text: '', html: '' });
      setTimeToRead(0);
      setImageUrl('');
      setshortDesc('');
      setTags([]);
      setErrors({});
      setLoading(false);

      return toast.success('Blog created successfully!', { duration: 5000 });
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
              onChange={(e) =>
                handleInputChange(setTitle, 'title', e.target.value)
              }
              className={`w-full p-3 my-3 border ${
                errors.title ? 'border-red-500' : 'border-gray-300'
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
                errors.slug ? 'border-red-500' : 'border-gray-300'
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
              onChange={(e) =>
                handleInputChange(setAuthor, 'author', e.target.value)
              }
              className={`w-full p-3 my-3 border ${
                errors.author ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
              placeholder="Enter the author's name"
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author}</p>
            )}
          </div>

          {/* Short Description Input  */}
          <div>
            <label className="block text-lg font-semibold">
              {content.shortDesc}
            </label>
            <input
              type="text"
              value={shortDesc}
              onChange={(e) =>
                handleInputChange(setshortDesc, 'desc', e.target.value)
              }
              className={`w-full p-3 my-3 border ${
                errors.desc ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
              placeholder="Enter the author's name"
            />
            {errors.desc && (
              <p className="text-red-500 text-sm">{errors.desc}</p>
            )}
          </div>

          {/* Time To Read Input */}
          <div>
            <label className="block text-lg font-semibold">
              {content.InputTimeToRead}
            </label>
            <input
              type="number"
              value={timeToRead === 0 ? '' : timeToRead}
              onChange={(e) =>
                handleInputChange(setTimeToRead, 'timeToRead', e.target.value)
              }
              className={`w-full p-3 my-3 border ${
                errors.timeToRead ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
              placeholder="Enter time to read"
            />
            {errors.timeToRead && (
              <p className="text-red-500 text-sm">{errors.timeToRead}</p>
            )}
          </div>

          {/* Blog Tags Input */}
          <div>
            <label className="block text-lg font-semibold">
              {content.Tags}
            </label>
            <input
              type="text"
              value={tagInput}
              onChange={(e) =>
                handleInputChange(setTagInput, 'tagInput', e.target.value)
              }
              onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
              placeholder="Enter a tag and press Enter"
              className={`w-full p-3 my-3 border ${
                errors.tags ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
            />

            {errors.tags && (
              <p className="text-red-500 text-sm">{errors.tags}</p>
            )}

            <div className="mt-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 my-1"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(index)}
                    className="ml-2 text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-lg font-semibold">
              {content.Image}
            </label>
            <div className="flex items-center space-x-3">
              <div
                onClick={handleImageUpload}
                className="w-full p-3 my-3 border bg-white  text-[#9ca3af] text-left border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black flex justify-between items-center"
                placeholder="Image URL will appear here"
              >
                Upload Image{' '}
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="w-6 h-6 object-cover rounded-md"
                  />
                )}
              </div>

              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(imageUrl)}
                disabled={!imageUrl}
                className="flex items-center space-x-2 p-2 bg-[#2703a5] text-white rounded-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none cursor-pointer disabled:bg-blue-500/70 disabled:cursor-not-allowed focus:ring-2 focus:ring-blue-300 transition-all"
              >
                <BsClipboard2CheckFill size={16} />
              </button>
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
          </div>
        </div>

        {/* Markdown Editor */}
        <div className="mt-6">
          <label className="block text-lg font-semibold">
            {content.InputDescription}
          </label>
          <MarkdownEditor
            value={description.text}
            onChange={(ev) => {
              const { text, html } = ev;
              setDescription({ text, html });
              if (text.trim()) clearError('description');
            }}
            style={{ width: '100%', height: '400px', marginTop: '1em' }}
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
        </div>

        {/* Submit Button */}
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
