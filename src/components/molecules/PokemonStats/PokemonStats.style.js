import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 95%;
  height: 20%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    margin-bottom: 20px;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    flex-direction: row;
    height: 24%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 2.2em;
  letter-spacing: 2px;
  padding-left: 2%;

  @media (max-width: 1400px) and (orientation: landscape) {
    font-size: 3.8em;
  }

  @media (max-width: 1024px) {
    font-size: 4em;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    font-size: 3em;
  }

  @media (max-width: 700px) {
    font-size: 2em;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    width: 20%;
  }
`;

export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 700px) {
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
