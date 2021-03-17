import { StyledName, StyledValue, Wrapper } from './PokemonAbility.style';

const PokemonAbility = ({ ability }) => {
  return (
    <Wrapper>
      <StyledName>{ability.ability.name}</StyledName>
      <StyledValue>Hidden: {ability.is_hidden ? 'true' : 'false'}</StyledValue>
      <StyledValue>Slot: {ability.slot}</StyledValue>
    </Wrapper>
  );
};

export default PokemonAbility;
