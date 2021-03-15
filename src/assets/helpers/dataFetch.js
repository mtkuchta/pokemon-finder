export const fetchPokemons = async (limit, offset) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  return await res.json();
};

export const fetchPokemon = async (name) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return await res.json();
};
