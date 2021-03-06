import { useQuery } from 'react-query';
import { fetchPokemons } from '../assets/helpers/dataFetch';

let offset = 0;
const GetPokemons = () => {
  const limit = window.innerWidth >= 700 ? 12 : 6;
  const { isLoading, data, refetch } = useQuery('pokemons', () => fetchPokemons(limit, offset));

  const nextPage = () => {
    offset += limit;
    refetch();
  };
  const prevPage = () => {
    offset -= limit;
    refetch();
  };
  return { nextPage, prevPage, offset, query: { isLoading, data, refetch } };
};

export default GetPokemons;
