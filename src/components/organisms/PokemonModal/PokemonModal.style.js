import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0%;
  left: 0%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  animation: showModal 0.5s linear;

  @keyframes showModal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const PokemonDetails = styled.div`
  height: 70%;
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.violet};
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.yellow};

  @media (max-width: 1024px) {
    height: 100%;
    width: 100%;
    border-radius: 0;
  }

  @media (max-width: 1400px) and (orientation: landscape) {
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
`;

export const PokemonName = styled.h1`
  width: 80%;
  color: ${({ theme }) => theme.colors.yellow};
  text-align: center;
  padding: 10px 0;
  font-size: 3em;
  border-bottom: 2px solid ${({ theme }) => theme.colors.yellow};
  letter-spacing: 2px;
  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 1400px) and (orientation: landscape) {
    font-size: 5em;
    padding: 20px 0;
  }

  @media (max-width: 1024px) {
    font-size: 5em;
    padding: 20px 0;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    font-size: 4em;
    padding: 10px 0;
  }

  @media (max-width: 700px) {
    font-size: 2.4em;
    padding: 7px 0;
  }
  @media (max-width: 700px) and (orientation: landscape) {
    font-size: 2em;
  }
`;
