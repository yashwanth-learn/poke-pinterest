import React from "react";
import PokeCard from "./PokeCard";

export default function CardRow(props) {
  const { pokemonSet } = props;
  return (
    <div
      style={{
        width: "100%",
        display: "inline-flex",
        justifyContent: "center",
        columnGap: "150px"
      }}
    >
      {pokemonSet?.map(pokemon => {
        // console.log("In Pokecard:", pokemonSet);
        return <PokeCard key={pokemon.name} name={pokemon.name} />;
      })}
    </div>
  );
}
