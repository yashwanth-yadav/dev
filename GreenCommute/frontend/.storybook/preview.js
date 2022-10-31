import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@mui/material';
import theme from '../src/theme.tsx';

import { MemoryRouter } from 'react-router';

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

const withThemeProvider = (Story, Context) => {
  return <ThemeProvider theme={theme}>{Story()}</ThemeProvider>;
};

export const decorators = [withThemeProvider];
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
