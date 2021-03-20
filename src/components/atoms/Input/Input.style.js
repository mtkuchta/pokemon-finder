import styled from 'styled-components';

export const PokemonInput = styled.input`
  width: 20%;
  min-width: 350px;
  font-size: 2.2em;
  line-height: 2.4em;
  font-family: 'Indie Flower';
  letter-spacing: 1px;
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.colors.violet};
  border-radius: 40px;
  box-shadow: 0px 0px 12px ${({ theme }) => theme.colors.violet};
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 2px;
    font-family: 'Indie flower';
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 12px ${({ theme }) => theme.colors.yellow};
  }

  @media (max-width: 1024px) {
    width: 40%;
    font-size: 3em;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    width: 40%;
    font-size: 2.2em;
  }

  @media (max-width: 700px) {
    width: 100%;
    font-size: 1.8em;
    line-height: 2.2;
    border-radius: 0;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    width: 40%;
    min-width: 20px;
    border-radius: 40px;
    font-size: 1.8em;
    line-height: 1.8em;
  }
`;
