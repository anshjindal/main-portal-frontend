import { StylesConfig } from 'react-select';

type OptionType = {
  value: string;
  label: string;
};

export const colourStyles: StylesConfig<OptionType, true> = {
  control: (base, { isFocused }) => ({
    ...base,
    height: 50,
    boxShadow: 'none',
    border: '1px solid #BDBDBD',
    color: isFocused ? '#000000' : '#333333',
    '&:hover': {
      border: '1px solid #BDBDBD',
      borderColor: '#BDBDBD',
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    flexWrap: 'nowrap',
  }),

  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? '#121212' : undefined,
    color: isFocused ? '#ffffff' : undefined,
  }),

  multiValue: (base) => ({
    ...base,
    padding: '5px 10px',
    borderRadius: 5,
    background: '#121212',
    color: 'white',
    display: 'flex',
    width: 'fit-content',
  }),

  multiValueLabel: (base) => ({
    ...base,
    color: 'white',
  }),
};
