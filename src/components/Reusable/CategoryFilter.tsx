import React from 'react';
import Select, { SingleValue, MultiValue, ActionMeta } from 'react-select';
import { colourStyles } from '../../utils/select';

type OptionType = {
  value: string;
  label: string;
};

type CategoryFilterProps = {
  categoryOptions: OptionType[];
  selectedCategory: string;
  handleCategoryChange: (newValue: MultiValue<OptionType>, actionMeta: ActionMeta<OptionType>) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categoryOptions,
  selectedCategory,
  handleCategoryChange,
}) => (
  <Select
    options={categoryOptions}
    styles={colourStyles}
    onChange={(newValue, actionMeta) => handleCategoryChange(newValue, actionMeta)}
    value={
      categoryOptions.find((option) => option.value === selectedCategory) || null
    }
    placeholder="Select a category..."
    className="w-full md:w-96"
    isClearable
  />
);

export default CategoryFilter;
