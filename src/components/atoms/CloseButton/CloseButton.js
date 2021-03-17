import { StyledButton } from './CloseButton.style';

const CloseButton = ({ onClick }) => {
  return <StyledButton onClick={onClick}>X</StyledButton>;
};

export default CloseButton;
