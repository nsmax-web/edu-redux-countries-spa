import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
  body {
  margin: 0;
  font-family: ${({ theme }) => theme.font.family};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.font.weight.light};
  background-color:  ${({ theme }) => theme.colors.bg};
  }

  * {
    box-sizing: border-box;
  }
`;

export enum eTheme {
  dark = "dark",
  light = "light",
  base = "base",
}

export const baseTheme = {
  type: eTheme.base,
  font: {
    family: "'Nunito Sans', sans-serif",
    size: {
      small: "14px",
      middle: "16px",
    },
    weight: {
      light: 300,
      normal: 600,
      bold: 800,
    },
  },
  other: {
    radii: "0.5rem",
  },
  colors: {
    text: "",
    bg: "",
    base: "",
    shadow: "",
  },
};

export const darkTheme = {
  ...baseTheme,
  type: eTheme.dark,
  colors: {
    text: "hsl(0, 0%, 100%)",
    bg: "hsl(207, 26%, 17%)",
    base: "hsl(209, 23%, 22%)",
    shadow: "rgba(245, 245, 245, 0.2) 0 0 8px",
  },
};

export const lightTheme = {
  ...baseTheme,
  type: eTheme.light,
  colors: {
    text: "hsl(200, 15%, 8%)",
    bg: "hsl(0, 0%, 98%)",
    base: "hsl(0, 0%, 100%)",
    shadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
};

export const themes = [darkTheme, lightTheme, baseTheme];
