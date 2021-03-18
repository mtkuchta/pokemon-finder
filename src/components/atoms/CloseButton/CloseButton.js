import { StyledButton } from './CloseButton.style';
import PropTypes from 'prop-types';

const CloseButton = ({ onClick }) => {
  return <StyledButton onClick={onClick}>X</StyledButton>;
};

CloseButton.propTypes = {
  onClick: PropTypes.func,
};

export default CloseButton;
