import { StyledMessage } from './ErrorMessage.style';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
  return <StyledMessage>{message}</StyledMessage>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
