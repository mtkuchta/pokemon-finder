import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  animation: showModal 0.5s linear;
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

  @keyframes showModal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
