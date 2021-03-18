import { Wrapper } from './PokemonAppearance.style';
import PropTypes from 'prop-types';

import PokemonImage from '../../atoms/PokemonImage/PokemonImage';

const PokemonAppearance = ({ pokemon }) => {
  return (
    <Wrapper>
      <PokemonImage url={pokemon.sprites.front_default} />
      <PokemonImage url={pokemon.sprites.back_default} />
    </Wrapper>
  );
};

PokemonAppearance.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonAppearance;
