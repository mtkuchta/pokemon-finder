import styled from 'styled-components';

export const AppTitle = styled.h1`
  font-family: 'Permanent Marker';
  font-size: 5em;
  color: ${({ theme }) => theme.colors.violet};
  text-shadow: 2px 2px ${({ theme }) => theme.colors.yellow};

  @media (max-width: 1024px) {
    font-size: 6em;
  }

  @media (max-width: 700px) {
    font-size: 3.2em;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    font-size: 2.8em;
  }
`;
