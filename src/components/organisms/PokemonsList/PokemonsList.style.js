import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    flex-wrap: nowrap;
    flex-grow: 1;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
