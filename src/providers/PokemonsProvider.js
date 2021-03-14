import React from 'react';

export const PokemonsContext = React.createContext({
  fetchPokemon: () => {},
  fetchPokemons: () => {},
});

const PokemonsProvider = ({ children }) => {
  return <PokemonsContext.Provider value={PokemonsContext}>{children}</PokemonsContext.Provider>;
};

export default PokemonsProvider;
