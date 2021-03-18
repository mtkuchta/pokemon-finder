import { Wrapper, Title, StatsContainer } from './PokemonStats.style';
import PropTypes from 'prop-types';

import PokemonStat from '../../atoms/PokemonStat/PokemonStat';

const PokemonStats = ({ pokemon: { stats } }) => {
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

PokemonStats.propTypes = {
  stats: PropTypes.object,
};

export default PokemonStats;
