import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 16%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.h1`
  margin-bottom: 10px;
  text-align: center;
  font-size: 1.8em;
  color: ${({ theme }) => theme.colors.orange};

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
  }
  @media (max-width: 700px) and (orientation: landscape) {
    margin-bottom: 0;
  }
`;

export const Value = styled.p`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1400px) and (orientation: landscape) {
    font-size: 3.5em;
  }

  @media (max-width: 1024px) {
    font-size: 3.5em;
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    font-size: 2.8em;
  }

  @media (max-width: 700px) {
    font-size: 2em;
  }
`;
