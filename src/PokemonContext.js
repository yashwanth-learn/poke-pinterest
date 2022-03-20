import React, { useState } from "react";

const PokemonContext = React.createContext([{}, () => {}]);

const PokemonProvider = props => {
  const [state, setState] = useState({
    deletedPokemons: [],
    savedPokemons: []
  });
  return (
    <PokemonContext.Provider value={[state, setState]}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
