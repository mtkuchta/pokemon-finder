import { Wrapper, SearchPokemon } from './Searcher.style';

import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const Searcher = () => {
  return (
    <Wrapper>
      <SearchPokemon>
        <Input />
        <Button text="search" disabled={false} />
      </SearchPokemon>
    </Wrapper>
  );
};

export default Searcher;
