import styled from 'styled-components';

export const Wrapper = styled.div`
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

  @media (max-width: 700px) {
    width: 95%;
    height: 14%;
    margin: 3px 0;
    border-radius: 5px;
    box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.yellow};
    flex-direction: row;

    img {
      height: 95%;
    }

    p {
      display: none;
    }
  }

  @media (max-width: 700px) and (orientation: landscape) {
    width: 45%;
    height: 25%;
    align-items: center;
    border-radius: 10px;
  }
`;

export const Details = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1.6em;
  opacity: 0.01;
  transition: 0.5s;
`;

export const PokemonName = styled.h1`
  font-size: 2.2em;
  color: ${({ theme }) => theme.colors.yellow};
  letter-spacing: 2px;
  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    padding-top: 20px;
  }

  @media (max-width: 800px) {
    font-size: 1.6em;
  }

  @media (max-width: 700px) {
    font-size: 2em;
    padding: 0;
  }
`;
