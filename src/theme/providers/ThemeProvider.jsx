import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { GlobalStyle } from "../globalStyle";
import { createTheme } from "../index";

export const ThemeProviderWraper = ({ children }) => {
  const theme = createTheme({
    direction: "rtl",
    mode: "light",
    responsiveFontSizes: true,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
