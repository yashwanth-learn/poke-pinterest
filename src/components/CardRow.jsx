import React from "react";
import PokeCard from "./PokeCard";

export default function CardRow(props) {
  const { pokemonSet, parent } = props;
  // console.log("In card row", pokemonSet);
  return (
    <div
      style={{
        width: "100%",
        display: "inline-flex",
        justifyContent: "center",
        columnGap: "150px",
        marginTop: "50px"
      }}
    >
      {pokemonSet?.map(pokemon => {
        // console.log("In Pokecard:", pokemonSet);
        return <PokeCard key={pokemon.id} pokemonObj={pokemon} parent={parent} />;
      })}
    </div>
  );
}
