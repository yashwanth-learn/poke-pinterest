import { useContext } from "react";
import { PokemonContext } from "../PokemonContext";

const usePokemon = () => {
  const [state, setState] = useContext(PokemonContext);

  function getState() {
    console.log("hey hello:", state);
  }
  function deletePokemon(pokemon) {
    const updatedDeletedPokemons = state.deletedPokemons;
    updatedDeletedPokemons.push(pokemon);
    setState(state => ({ ...state, deletedPokemons: updatedDeletedPokemons }));
    console.log("Deleted Pokemons", state.deletedPokemons);
  }

  function savePokemon(pokemon) {
    const updatedSavedPokemons = state.savedPokemons;
    updatedSavedPokemons.push(pokemon);
    setState(state => ({ ...state, savedPokemons: updatedSavedPokemons }));
    console.log("Saved Pokemons", state.savedPokemons);
  }

  return {
    getState,
    deletePokemon,
    savePokemon
  };
};

export default usePokemon;
