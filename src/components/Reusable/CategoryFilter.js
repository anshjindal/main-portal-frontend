import React from 'react';
import Select from 'react-select';
import { colourStyles } from '../../utils/select';

const CategoryFilter = ({ categoryOptions, selectedCategory, handleCategoryChange }) => (
  <Select
    options={categoryOptions}
    styles={colourStyles}
    onChange={handleCategoryChange}
    value={categoryOptions.find((option) => option.value === selectedCategory) || null}
    placeholder="Select a category..."
    className="w-full md:w-96"
    isClearable
  />
);

export default CategoryFilter;
