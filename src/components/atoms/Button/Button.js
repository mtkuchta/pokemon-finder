import { StyledButton } from './Button.style';

const Button = ({ className, text, disabled, name, onClick }) => {
  return (
    <StyledButton name={name} className={className} disabled={disabled} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
