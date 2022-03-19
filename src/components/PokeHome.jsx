import React, { useEffect, useState } from "react";
import { fetchPokemons } from "../api/fetchPokemons";
import CardRow from "./CardRow";

export default function PokeHome(props) {
  const {getMore, setGetMore} = props;
  const [pokemonSets, setPokemonSets] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const scrollableDiv = React.createRef();
  const sliceForRows = (arr) => {
    const res = [];
    for (let i = 0; i < arr.length; i += 3) {
      const chunk = arr.slice(i, i + 3);
      res.push(chunk);
    }
    console.log("Slicing:", res);
    return res;
  };
  console.log(getMore);
  console.log(setGetMore);
  const handleShowMore = () => {
    fetchPoke();
  }
  const fetchPoke = () => {
    fetchPokemons(nextUrl).then((resp) => {
      console.log("In home fetch:", resp);
      setNextUrl(resp.next);
      setPokemonSets(sliceForRows(resp.results));
    });
  }
  useEffect(() => {
    fetchPoke();
    if(getMore){
      setGetMore();
    }
  }, [getMore]);
  return (
    <div>
      <div ref={scrollableDiv} onScroll={() => console.log("Helloooooo")}>
        {pokemonSets.map((pokemonSet, index) => {
          return <CardRow key={index} pokemonSet={pokemonSet} />;
        })}
      </div>
      <div>
        <button onClick={handleShowMore}>show more</button>
      </div>
    </div>
    // <CardRow pokemonSet={pokemonSets[0]} />
  );
}
