import React, { useState } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

export const PokemonsContext = React.createContext({
  showModal: () => {},
  closeModal: () => {},
  setPokemon: () => {},
});

const PokemonsProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState(null);
  const [searchError, setSearchError] = useState(null);

  const showModal = (pokemon) => {
    setPokemon(pokemon);
    setSearchError(null);
  };

  const closeModal = () => {
    setPokemon(null);
  };

  const handlePokemonSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <PokemonsContext.Provider
      value={{ showModal, closeModal, handlePokemonSearch, pokemon, setPokemon, searchError, setSearchError }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
