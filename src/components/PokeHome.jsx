import React, { useEffect, useState, useContext } from "react";
import { fetchPokemon } from "../api/fetchPokemons";
import CardRow from "./CardRow";
import PokemonContext from "../PokemonContext";
import sliceForRows from "../utils/pokeUtils";

export default function PokeHome(props) {
  const { getMore, setGetMore } = props;
  const [pokemonSets, setPokemonSets] = useState([]);
  const [pok, setPok] = useState([]);
  const scrollableDiv = React.createRef();

  const { state, setState } = useContext(PokemonContext);
  const fetchPoke9 = async () => {
    const nxtId = state.nxtId;
    for (let i = nxtId; i <= nxtId + 8; i++) {
      await fetchPokemon(i).then(resp => {
        const newPoks = pok;
        newPoks.push(resp);
        setPok(newPoks);
      });
    }
    const newState = state;
    newState.pokemons = pok;
    newState.nxtId = nxtId + 9;
    setState(newState);
    console.log("state after setting dummy state", state);
    setPokemonSets(sliceForRows(pok));
  };

  useEffect(async () => {
    console.log("state before fetch in home", state);
    if (state.pokemons.length === 0 || getMore) {
      await fetchPoke9();
    }
    if (getMore) {
      setGetMore();
    }
  }, [getMore]);

  useEffect(() => {
    const updatedPokemons = state.pokemons;
    setPok(updatedPokemons);
    setPokemonSets(sliceForRows(updatedPokemons));
  }, [state]);
  return (
    <div>
      <div ref={scrollableDiv}>
        {pokemonSets.map((pokemonSet, index) => {
          return <CardRow key={index} pokemonSet={pokemonSet} parent="home" />;
        })}
      </div>
    </div>
  );
}
