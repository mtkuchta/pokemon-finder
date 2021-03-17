import { Wrapper, Name, Value } from './PokemonStat.style';

const PokemonStat = (stat) => {
  console.log(stat);
  return (
    <Wrapper>
      <Name>{stat.stat.stat.name}</Name>
      <Value>{stat.stat.base_stat}</Value>
    </Wrapper>
  );
};

export default PokemonStat;
