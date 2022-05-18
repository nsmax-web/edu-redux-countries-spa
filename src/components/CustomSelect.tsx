import styled, { useTheme } from "styled-components";

import Select from "react-select";

export const CustomSelect = styled(Select).attrs(() => {
  const theme = useTheme();
  return {
    styles: {
      control: (provided) => ({
        ...provided,
        backgroundColor: theme.colors.base,
        color: theme.colors.text,
        borderRadius: theme.other.radii,
        padding: "0.25rem",
        border: "none",
        // boxShadow: "var(--shadow)",
        height: "50px",
      }),
      option: (provided, state) => ({
        ...provided,
        cursor: "pointer",
        color: theme.colors.text,
        backgroundColor: state.isSelected ? theme.colors.bg : theme.colors.base,
      }),
    },
  };
})`
  width: 200px;
  border-radius: ${({ theme }) => theme.other.radii};
  font-family: ${({ theme }) => theme.font.family};
  border: none;

  & > * {
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: ${({ theme }) => theme.colors.text} !important;
  }

  & > div[id] {
    background-color: ${({ theme }) => theme.colors.base};
  }
`;
