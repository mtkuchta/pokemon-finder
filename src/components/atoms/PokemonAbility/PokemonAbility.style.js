import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 30%;
  height: 100%;
  margin: 0 10px;

  @media (max-width: 700px) {
    width: 28%;
    margin: 5px;
  }
`;

export const StyledName = styled.h1`
  color: ${({ theme }) => theme.colors.orange};
  text-align: center;
  font-size: em;

  @media (max-width: 1400px) and (orientation: landscape) {
    font-size: 3em;
  }

  @media (max-width: 1024px) {
    font-size: 3em;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    font-size: 2.2em;
  }

  @media (max-width: 700px) {
    font-size: 1.6em;
    margin: 5px;
  }
`;

export const StyledValue = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2em;
  letter-spacing: 2px;
  margin: 5px 0;

  @media (max-width: 1400px) and (orientation: landscape) {
    font-size: 3em;
  }

  @media (max-width: 1024px) {
    font-size: 3em;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    font-size: 2.5em;
  }

  @media (max-width: 700px) {
    font-size: 1.6em;
  }
`;
