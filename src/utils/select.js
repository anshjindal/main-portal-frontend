export const colourStyles = {
  control: (base, { data, isDisabled, isFocused, state, isSelected }) => {
    // console.log({ data, isDisabled, isFocused, isSelected });
    return {
      ...base,
      height: 50,
      boxShadow: "none",
      border: isSelected ? "2px solid #EEEEEE" : "1px solid #BDBDBD",
      color: isFocused ? "#000000" : "#333333",
      "&:hover": {
        border: isSelected ? "2px solid #EEEEEE" : "1px solid #BDBDBD",
        borderColor: "#BDBDBD",
      },
    };
  },
  valueContainer: (provided, state) => ({
    ...provided,
    whiteSpace: "nowrap",
    overflow: "hidden",
    flexWrap: 'nowrap',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // console.log({ data, isDisabled, isFocused, isSelected });
    return {
      ...styles,
      backgroundColor: isFocused ? "#121212" : null,
      color: isFocused ? "#ffffff" : null,
    };
  },
  multiValue: (base, { data, isFocused }) => ({
    ...base,
    padding: "5px 10px",
    borderRadius: 5,
    background: "#121212",
    color: "white",
    display: "flex",
    width: "fit-content",
  }),
  multiValueLabel: (base, { data, isFocused }) => {
    return {
      ...base,
      color: "white",
    };
  },
};