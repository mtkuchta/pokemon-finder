import { Wrapper, StyledTitle, AbilitiesContainer } from './PokemonAbilities.style';

import PokemonAbility from '../../atoms/PokemonAbility/PokemonAbility';

const PokemonAbilities = ({ pokemon: { abilities } }) => {
  return (
    <Wrapper>
      <StyledTitle>Abilities:</StyledTitle>
      <AbilitiesContainer>
        {abilities.map((ability) => {
          return <PokemonAbility key={ability.ability.name} ability={ability} />;
        })}
      </AbilitiesContainer>
    </Wrapper>
  );
};

export default PokemonAbilities;
