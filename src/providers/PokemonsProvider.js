import React, { useState } from 'react';

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

  return (
    <PokemonsContext.Provider value={{ showModal, closeModal, pokemon, setPokemon, searchError, setSearchError }}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
