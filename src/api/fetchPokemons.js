export const fetchPokemons = async (next) => {
  if (next === "") {
    next = "https://pokeapi.co/api/v2/pokemon/";
  }
  let response = await fetch(next);
  let pokemons = await response.json();
  return pokemons;
};

export const fetchPokemon = async (name) => {
  const url = "https://pokeapi.co/api/v2/pokemon/" + name;
  let response = await fetch(url);
  let pokemon = await response.json();
  return pokemon;
};
