import React, { useContext } from 'react';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

import { Wrapper, PokemonDetails, PokemonName } from './PokemonModal.style';

import ClosedButton from '../../atoms/CloseButton/CloseButton';
import PokemonAppearance from '../../molecules/PokemonAppearance/PokemonAppearance';
import PokemonStats from '../../molecules/PokemonStats/PokemonStats';
import PokemonAbilities from '../../molecules/PokemonAbilities/PokemonAbilities';

const PokemonModal = () => {
  const { closeModal, pokemon } = useContext(PokemonsContext);

  return (
    <Wrapper>
      <PokemonDetails>
        <ClosedButton onClick={closeModal} />
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonAppearance pokemon={pokemon} />
        <PokemonStats pokemon={pokemon} />
        <PokemonAbilities pokemon={pokemon} />
      </PokemonDetails>
    </Wrapper>
  );
};

export default PokemonModal;
