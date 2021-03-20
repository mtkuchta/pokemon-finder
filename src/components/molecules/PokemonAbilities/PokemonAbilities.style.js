import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 95%;
  height: 30%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    margin-top: 40px;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    flex-direction: row;
  }
`;

export const StyledTitle = styled.h1`
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
    width: 25%;
  }
`;

export const AbilitiesContainer = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;
