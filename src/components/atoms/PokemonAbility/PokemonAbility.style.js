import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 30%;
  height: 100%;
  margin: 0 10px;
`;

export const StyledName = styled.h1`
  color: ${({ theme }) => theme.colors.orange};
  text-align: center;
`;

export const StyledValue = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2em;
  letter-spacing: 2px;
  margin: 5px 0;
`;
