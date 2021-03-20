import styled from 'styled-components';

export const StyledMessage = styled.p`
  color: red;
  font-size: 2.5em;
  padding: 10px;
  font-weight: bold;
  letter-spacing: 1px;

  @media (max-width: 700px) {
    padding: 0;
    font-size: 2em;
  }
`;
