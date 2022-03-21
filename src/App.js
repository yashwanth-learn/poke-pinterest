import { useState } from "react";
import "./App.css";
import PokeContainer from "./components/PokeContainer";
import Navigation from "./components/Navigation";
import PokemonContext from "./PokemonContext";

function App() {
  const [state, setState] = useState({
    savedPokemons: [],
    deletedPokemons: [],
    pokemons:[]
  });
  return (
    <PokemonContext.Provider value={{ state, setState }}>
      <div className="App">
        <Navigation />
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
