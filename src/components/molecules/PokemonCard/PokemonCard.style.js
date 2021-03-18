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
  }
`;

export const Details = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 1.6em;
  opacity: 0.01;
  transition: 0.5s;
`;

export const PokemonName = styled.h1`
  color: ${({ theme }) => theme.colors.yellow};
  letter-spacing: 2px;
  &::first-letter {
    text-transform: uppercase;
  }
`;
