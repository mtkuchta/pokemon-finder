import Title from '../../atoms/Title/Title';
import { Wrapper, Header } from './MainTemplate.style';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Title />
      </Header>
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
