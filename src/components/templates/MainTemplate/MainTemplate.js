import Title from '../../atoms/Title/Title';
import { Wrapper, Header } from './MainTemplate.style';
import QueryProvider from '../../../providers/QueryProvider';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Title />
      </Header>
      <QueryProvider>{children}</QueryProvider>
    </Wrapper>
  );
};

export default MainTemplate;
