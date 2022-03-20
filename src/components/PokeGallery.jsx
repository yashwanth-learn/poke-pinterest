import React, { useEffect, useState, useContext } from "react";
import usePokemon from "../hooks/usePokemon";
import PokemonContext2 from "../PokemonContext2";

export default function PokeGallery() {
  const [deletedPokemons, setDeletedPokemons] = useState([]);
  // const {getState, deletePokemon} = usePokemon();
  useEffect(() => {
    // deletePokemon({name:123});
  });
  const { state } = useContext(PokemonContext2);
  return (
    // <PokemonProvider>
    <div>
      {state?.deletedPokemons?.map(pokemon => {
        return <img src={pokemon.sprites.other.dream_world.front_default} />;
      })}
      {/* {deletePokemon({name:123})} */}
      Its ok, dont worry!
    </div>
    // </PokemonProvider>
  );
}
