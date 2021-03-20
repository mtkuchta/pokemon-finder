import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  max-width: 1000px;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    height: 50%;
    flex-grow: 1;
  }
`;
