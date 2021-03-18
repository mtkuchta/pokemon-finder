import { PokemonInput } from './Input.style';
import PropTypes from 'prop-types';

const Input = ({ value, onChange }) => {
  return <PokemonInput type="text" placeholder="Find Pokemon..." value={value} onChange={onChange} required />;
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
