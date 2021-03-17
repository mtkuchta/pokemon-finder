import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 95%;
  height: 20%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  width: 100%;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 2.2em;
  letter-spacing: 2px;
`;

export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
