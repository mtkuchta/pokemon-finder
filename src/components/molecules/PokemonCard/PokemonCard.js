import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { fetchPokemon } from '../../../assets/helpers/dataFetch';

const Wrapper = styled.div`
  width: 20%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.violet};
  border-radius: 15px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.colors.violet};
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
    p {
      opacity: 1;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 1.5em;
    opacity: 0.01;
    transition: 0.5s;
  }
`;

const PokemonCard = ({ name }) => {
  const { isLoading, error, data } = useQuery(`${name}`, () => fetchPokemon(name));

  if (isLoading) return 'Loading...';

  if (error) return `Something went wrong: ${error.message}`;
  return (
    <Wrapper onClick={() => console.log(data)}>
      <h1>{name}</h1>
      <img src={data.sprites.front_default} alt="" />
      <p>Show details</p>
    </Wrapper>
  );
};

export default PokemonCard;
