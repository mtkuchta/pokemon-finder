import { StyledButton } from './Button.style';
import PropTypes from 'prop-types';

const Button = ({ className, text, disabled, name, onClick }) => {
  return (
    <StyledButton name={name} className={className} disabled={disabled} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
