import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(-135deg, ${({ theme }) => theme.colors.orange}, ${({ theme }) => theme.colors.violet});
`;

export const Header = styled.header`
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
