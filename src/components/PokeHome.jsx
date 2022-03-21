import React, { useEffect, useState, useContext } from "react";
import { fetchPokemon } from "../api/fetchPokemons";
import CardRow from "./CardRow";
import PokemonContext from "../PokemonContext";
import sliceForRows from "../utils/pokeUtils";

export default function PokeHome(props) {
  const { getMore, setGetMore } = props;
  const [pokemonSets, setPokemonSets] = useState([]);
  const [pok, setPok] = useState([]);
  const [nxtId, setNxtId] = useState(1);
  const scrollableDiv = React.createRef();

  const { state, setState } = useContext(PokemonContext);
  // const handleShowMore = () => {
  //   fetchPoke();
  // };
  const fetchPoke9 = () => {
    console.log("Nxt Id in PokeHome:", nxtId);
    for (let i = nxtId; i <= nxtId + 8; i++) {
      fetchPokemon(i).then(resp => {
        console.log("In home fetch:", resp);
        const qwerty = pok;
        qwerty.push(resp);
        setPok(qwerty);
        setState({ ...state, pokemons: pok });
        setPokemonSets(sliceForRows(pok));
      });
    }
    setNxtId(nxtId + 9);
  };

  useEffect(() => {
    fetchPoke9();
    if (getMore) {
      setGetMore();
    }
  }, [getMore]);
  return (
    <div>
      <div ref={scrollableDiv}>
        {pokemonSets.map((pokemonSet, index) => {
          return <CardRow key={index} pokemonSet={pokemonSet} parent="home"/>;
        })}
      </div>
      <div>{/* <button onClick={handleShowMore}>show more</button> */}</div>
    </div>
  );
}
