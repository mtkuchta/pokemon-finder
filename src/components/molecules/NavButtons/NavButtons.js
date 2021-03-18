import { Wrapper } from './NavButtons.style';
import GetPokemons from '../../../hooks/getPokemons';

import Button from '../../atoms/Button/Button';

const NavButtons = () => {
  const { nextPage, prevPage, offset } = GetPokemons(12);

  return (
    <Wrapper>
      <Button className="navBtn" text="Prev" disabled={offset === 0 ? true : false} name="prev" onClick={prevPage} />
      <Button className="navBtn" text="Next" name="next" disabled={false} onClick={nextPage} />
    </Wrapper>
  );
};

export default NavButtons;
