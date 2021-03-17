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
`;

export const Value = styled.p`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.white};
`;
