import { Wrapper, Name, Value } from './PokemonStat.style';
import PropTypes from 'prop-types';

const PokemonStat = ({ stat }) => {
  return (
    <Wrapper>
      <Name>{stat.stat.name}</Name>
      <Value>{stat.base_stat}</Value>
    </Wrapper>
  );
};

PokemonStat.propTypes = {
  stat: PropTypes.object,
};

export default PokemonStat;
