import { PokemonInput } from './Input.style';

const Input = ({ value, onChange }) => {
  return <PokemonInput type="text" placeholder="Find Pokemon..." value={value} onChange={onChange} required />;
};

export default Input;
