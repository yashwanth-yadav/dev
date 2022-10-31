import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import theme from './theme';

const container = document.getElementById('root');

if (!container) {
  throw new Error('id present in the container was not found!');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
