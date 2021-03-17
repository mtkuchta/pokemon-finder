import React, { useContext } from 'react';
import { Wrapper } from './PokemonCard.style';
import { useQuery } from 'react-query';
import { fetchPokemon } from '../../../assets/helpers/dataFetch';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

const PokemonCard = ({ name }) => {
  const { isLoading, error, data } = useQuery(`${name}`, () => fetchPokemon(name));
  const { showModal } = useContext(PokemonsContext);

  if (isLoading) return 'Loading...';

  if (error) return `Something went wrong: ${error.message}`;
  return (
    <Wrapper onClick={() => showModal(data)}>
      <h1>{name}</h1>
      <img src={data.sprites.front_default} alt="" />
      <p>Show details</p>
    </Wrapper>
  );
};

export default PokemonCard;
