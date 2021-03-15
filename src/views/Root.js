import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';

import { Wrapper } from './Root.style';

import PokemonsProvider from '../providers/PokemonsProvider';

import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import Searcher from '../components/molecules/Searcher/Searcher';
import PokeonsBord from '../components/organisms/PokemonsBoard/PokemonsBoard';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <MainTemplate>
          <PokemonsProvider>
            <Searcher />
            <PokeonsBord />
          </PokemonsProvider>
        </MainTemplate>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
