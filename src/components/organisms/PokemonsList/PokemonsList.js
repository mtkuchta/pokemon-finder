import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import GetPokemons from '../../../hooks/getPokemons';

import { PokemonsContext } from '../../../providers/PokemonsProvider';
import PokemonCard from '../../molecules/PokemonCard/PokemonCard';

const Wrapper = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const PokemonsList = ({ offset }) => {
  const {
    query: { isLoading, data },
  } = GetPokemons(12);

  if (isLoading) return 'Loading';

  return (
    <Wrapper>
      {isLoading
        ? 'Loading'
        : data.results.map((pokemon) => {
            return <PokemonCard key={pokemon.name} name={pokemon.name} />;
          })}
    </Wrapper>
  );
};

export default PokemonsList;
