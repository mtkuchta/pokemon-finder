import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    height: 15%;
    width: 100%;
    margin: 5px 0;
    padding-bottom: 5px;
  }
`;
