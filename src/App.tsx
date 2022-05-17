import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Details } from "./pages/Details";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { darkTheme, GlobalTheme, ITheme } from "./styles/theme";

function App() {
  const theme = darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </ThemeProvider>
  );
}

export default App;
