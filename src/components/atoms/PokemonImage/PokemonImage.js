import styled from 'styled-components';

const StyledImg = styled.img``;

const PokemonImage = ({ url }) => {
  return <img src={url} />;
};

export default PokemonImage;
