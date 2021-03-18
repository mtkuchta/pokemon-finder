import { StyledName, StyledValue, Wrapper } from './PokemonAbility.style';
import PropTypes from 'prop-types';

const PokemonAbility = ({ ability }) => {
  return (
    <Wrapper>
      <StyledName>{ability.ability.name}</StyledName>
      <StyledValue>Hidden: {ability.is_hidden ? 'true' : 'false'}</StyledValue>
      <StyledValue>Slot: {ability.slot}</StyledValue>
    </Wrapper>
  );
};

PokemonAbility.propTypes = {
  ability: PropTypes.object,
};

export default PokemonAbility;
