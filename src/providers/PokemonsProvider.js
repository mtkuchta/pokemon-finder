import React, { useState } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

export const PokemonsContext = React.createContext({
  showModal: () => {},
  closeModal: () => {},
});

const PokemonsProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState(null);

  const showModal = (pokemon) => {
    setPokemon(pokemon);
  };

  const closeModal = () => {
    setPokemon(null);
  };

  return <PokemonsContext.Provider value={{ showModal, closeModal, pokemon }}>{children}</PokemonsContext.Provider>;
};

export default PokemonsProvider;
