import React from "react";
import { render as RTL } from "@testing-library/react";
import {
  ColorModeProvider,
  CSSReset,
  ThemeProvider,
  theme,
} from "@chakra-ui/core";
import { Router } from "react-router-dom";
import { ReactQueryCacheProvider, QueryCache } from "react-query";
import { createMemoryHistory } from "history";

const AllTheProviders = ({ children }) => {
  const queryCache = new QueryCache();
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ReactQueryCacheProvider queryCache={queryCache}>
          {children}
        </ReactQueryCacheProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

const AllTheProvidersWithRouter = ({ children }) => {
  const queryCache = new QueryCache();
  const history = createMemoryHistory();
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Router history={history}>
          <ReactQueryCacheProvider queryCache={queryCache}>
            {children}
          </ReactQueryCacheProvider>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

const render = (ui, options) =>
  RTL(ui, { wrapper: AllTheProviders, ...options });

const renderWithRouter = (ui, options) =>
  RTL(ui, { wrapper: AllTheProvidersWithRouter, ...options });

export * from "@testing-library/react";
export { render, renderWithRouter };