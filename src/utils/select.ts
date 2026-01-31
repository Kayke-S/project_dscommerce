export const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "none",
    minHeight: "40px",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    border: "none",
    color: " var(--dsc-color-font-placeholder)",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
};
