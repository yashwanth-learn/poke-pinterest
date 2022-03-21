import React, { useEffect, useState, useContext } from "react";
import PokemonContext from "../PokemonContext";
import sliceForRows from "../utils/pokeUtils";
import CardRow from "./CardRow";

export default function PokeGallery() {
  const [pokemonSets, setPokemonSets] = useState([]);
  const { state } = useContext(PokemonContext);
  console.log("In Poke gallery:", state);
  useEffect(() => {
    setPokemonSets(sliceForRows(state?.savedPokemons));
  });

  return (
    <div>
      {pokemonSets.map((pokemonSet, index) => {
        return <CardRow key={index} pokemonSet={pokemonSet} parent="gallery" />;
      })}
    </div>
  );
}
