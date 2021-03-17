import React, { useContext, useState } from 'react';
import { Wrapper } from './PokemonsList.style';
import GetPokemons from '../../../hooks/getPokemons';

import PokemonCard from '../../molecules/PokemonCard/PokemonCard';

const PokemonsList = () => {
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
