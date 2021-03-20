import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    height: 15%;
    padding: 0;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    height: 15%;
    padding: 0;
    margin-top: 10px;
  }
`;

export const SearchPokemon = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 20px;
    padding: 0;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    flex-direction: row;
    justify-content: center;
    height: 10%;
    margin-bottom: 20px;
    padding: 0;
  }
`;
