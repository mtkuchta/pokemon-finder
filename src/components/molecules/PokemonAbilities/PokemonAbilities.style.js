import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 95%;
  height: 30%;
  margin-top: 20px;
`;

export const StyledTitle = styled.h1`
  width: 100%;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 2.2em;
  letter-spacing: 2px;
`;

export const AbilitiesContainer = styled.div`
  width: 100%;
  display: flex;
`;
