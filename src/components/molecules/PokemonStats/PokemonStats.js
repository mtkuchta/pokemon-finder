import { Wrapper, Title, StatsContainer } from './PokemonStats.style';

import PokemonStat from '../../atoms/PokemonStat/PokemonStat';

const PokemonStats = ({ pokemon: { stats } }) => {
  console.log(stats);
  return (
    <Wrapper>
      <Title>Stats: </Title>
      <StatsContainer>
        {stats.map((stat) => {
          return <PokemonStat key={stat.stat.name} stat={stat} />;
        })}
      </StatsContainer>
    </Wrapper>
  );
};

export default PokemonStats;
