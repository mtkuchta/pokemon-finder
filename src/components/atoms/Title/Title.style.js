import styled from 'styled-components';

export const AppTitle = styled.h1`
  font-family: 'Permanent Marker';
  font-size: 5em;
  color: ${({ theme }) => theme.colors.violet};
  text-shadow: 2px 2px ${({ theme }) => theme.colors.yellow};
`;
