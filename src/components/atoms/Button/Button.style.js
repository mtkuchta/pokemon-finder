import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 6%;
  min-width: 100px;
  font-size: 2.2em;
  line-height: 2.4em;
  color: ${({ theme }) => theme.colors.yellow};
  letter-spacing: 1px;
  margin-left: 24px;
  background-color: ${({ theme }) => theme.colors.violet};
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: 0.6s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.violet};
  }

  &:focus {
    outline: none;
  }

  &.navBtn {
    line-height: 1.6em;
  }

  &:disabled {
    color: gray;
  }

  &:disabled:hover {
    background-color: ${({ theme }) => theme.colors.violet};
  }
`;
