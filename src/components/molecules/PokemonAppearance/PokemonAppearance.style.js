import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  height: 25%;
  margin: 2%;

  @media (max-width: 1024px) and (orientation: landscape) {
    height: 20%;
    width: 40%;
  }

  @media (max-width: 700px) {
    width: 70%;
    height: 20%;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    width: 30%;
    height: 30%;
    margin: 0;
  }
`;
