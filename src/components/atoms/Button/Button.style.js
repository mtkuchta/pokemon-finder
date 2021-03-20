import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 6%;
  min-width: 150px;
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
    color: ${({ theme }) => theme.colors.yellow};
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

  @media (max-width: 1024px) {
    font-size: 3em;
    width: 10%;
    min-width: 200px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.violet};
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  @media (max-width: 1024px) and (orientation: landscape) {
    font-size: 2.4em;
    line-height: 2.6em;
  }

  @media (max-width: 700px) {
    font-size: 2em;
    min-width: 100px;

    &.search {
      width: 100%;
      line-height: 2em;
      margin: 0;
      border-radius: 0;
    }
  }

  @media (max-width: 700px) and (orientation: landscape) {
    font-size: 1.8em;

    &.search {
      width: 30%;
      min-width: 100px;
      border-radius: 40px;
      margin-left: 20px;
    }
  }
`;
