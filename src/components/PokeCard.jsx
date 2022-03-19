import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../api/fetchPokemons";

export default function PokeCard(props) {
  const { name } = props;
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    fetchPokemon(name).then((resp) => {
      // console.log("In card fetch:", resp);
      setPokemon(resp);
    });
  }, [name]);
  return (
    <div style={{ width: "300px", height: "500px" }}>
      <img
        alt={"hello"}
        src={pokemon?.sprites?.other?.dream_world?.front_default}
        width={300}
        height={300}
      />
      <span><b>{name}</b></span>
      <span><button>-</button><button>+</button></span>
    </div>
  );
}
