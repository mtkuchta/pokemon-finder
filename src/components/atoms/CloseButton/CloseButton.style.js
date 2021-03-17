import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 2%;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.violet};
  color: ${({ theme }) => theme.colors.yellow};
  transform: rotate(90deg);
  margin: 10px 10px;
  font-size: 2em;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.1) rotate(90deg);
    border-color: ${({ theme }) => theme.colors.orange};
  }
`;
