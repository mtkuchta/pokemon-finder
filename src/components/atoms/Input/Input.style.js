import styled from 'styled-components';

export const PokemonInput = styled.input`
  width: 20%;
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
`;
