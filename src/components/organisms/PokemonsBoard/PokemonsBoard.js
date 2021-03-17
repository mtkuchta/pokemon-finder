import React, { useContext } from 'react';
import { Wrapper } from './PokemonsBoard.style';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

import NavButtons from '../../molecules/NavButtons/NavButtons';
import PokemonsList from '../../organisms/PokemonsList/PokemonsList';
import PokemonModal from '../PokemonModal/PokemonModal';

const PokemonsBoard = () => {
  const { offset, pokemon } = useContext(PokemonsContext);

  return (
    <Wrapper>
      <NavButtons />
      <PokemonsList offset={offset} />
      {pokemon ? <PokemonModal /> : null}
    </Wrapper>
  );
};

export default PokemonsBoard;
