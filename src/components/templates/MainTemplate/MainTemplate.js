import Title from '../../atoms/Title/Title';
import { Wrapper, Header } from './MainTemplate.style';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Title />
      </Header>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Wrapper>
  );
};

export default MainTemplate;
