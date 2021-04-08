import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import PokemonsProvider from '../../providers/PokemonsProvider';
import QueryProvider from '../../providers/QueryProvider';

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <PokemonsProvider>
        <QueryProvider>{children}</QueryProvider>
      </PokemonsProvider>
    </ThemeProvider>
  );
};
