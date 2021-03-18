import React, { useContext } from 'react';
import { Wrapper, Details, PokemonName } from './PokemonCard.style';
import { useQuery } from 'react-query';
import { fetchPokemon } from '../../../assets/helpers/dataFetch';
import { PokemonsContext } from '../../../providers/PokemonsProvider';
import Loader from '../../atoms/Loader/Loader';

const PokemonCard = ({ name }) => {
  const { isLoading, error, data } = useQuery(`${name}`, () => fetchPokemon(name));
  const { showModal } = useContext(PokemonsContext);

  if (error) return `Something went wrong: ${error.message}`;
  return (
    <Wrapper onClick={() => showModal(data)}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PokemonName>{name}</PokemonName>
          <img src={data.sprites.front_default} alt="" />
          <Details>Show details</Details>
        </>
      )}
    </Wrapper>
  );
};

export default PokemonCard;
