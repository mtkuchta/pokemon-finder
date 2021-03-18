import PropTypes from 'prop-types';

const PokemonImage = ({ url }) => {
  return <img src={url} alt="pokemon_picture" />;
};

PokemonImage.propTypes = {
  url: PropTypes.string,
};

export default PokemonImage;
