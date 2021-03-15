import React, { useState } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

export const PokemonsContext = React.createContext({
  offset: 0,
  fetchPokemon: () => {},
  fetchPokemons: () => {},
  changePage: () => {},
});

const PokemonsProvider = ({ children }) => {
  return <PokemonsContext.Provider value={{}}>{children}</PokemonsContext.Provider>;
};

export default PokemonsProvider;
