import React, { useContext } from 'react';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

import NavButtons from '../../molecules/NavButtons/NavButtons';
import PokemonsList from '../../organisms/PokemonsList/PokemonsList';

const Wrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const queryClient = new QueryClient();

const PokemonsBoard = () => {
  const { offset } = useContext(PokemonsContext);

  return (
    <Wrapper>
      {/* <QueryClientProvider client={queryClient}> */}
      <NavButtons />
      <PokemonsList offset={offset} />
      {/* </QueryClientProvider> */}
    </Wrapper>
  );
};

export default PokemonsBoard;
