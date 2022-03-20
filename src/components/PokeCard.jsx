import React, { useEffect, useState, useContext } from "react";
import { fetchPokemon } from "../api/fetchPokemons";
import usePokemon from "../hooks/usePokemon";
import PokemonContext2 from "../PokemonContext2";

export default function PokeCard(props) {
  const { name } = props;
  const [pokemon, setPokemon] = useState({});

  const { state, setState } = useContext(PokemonContext2);
  const { deletePokemon, savePokemon } = usePokemon();
  const handleOnDelete = () => {
    const updatedDeletedPokemons = state.deletedPokemons;
    updatedDeletedPokemons.push(pokemon);
    setState({ ...state, deletedPokemons: updatedDeletedPokemons });
  };
  const handleOnSave = () => {
    savePokemon(pokemon);
  };
  useEffect(() => {
    fetchPokemon(name).then(resp => {
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
      <span>
        <b>{name}</b>
      </span>
      <span>
        <button onClick={handleOnDelete}>-</button>
        <button onClick={handleOnSave}>+</button>
      </span>
    </div>
  );
}
