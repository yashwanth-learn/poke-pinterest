import { useState } from "react";
import "./App.css";
import PokeContainer from "./components/PokeContainer";
import Navigation from "./components/Navigation";
import PokemonContext2 from "./PokemonContext2";

function App() {
  const [state, setState] = useState({
    savedPokemons: [],
    deletedPokemons: []
  });
  return (
    <PokemonContext2.Provider value={{ state, setState }}>
      <div className="App">
        <Navigation />
      </div>
    </PokemonContext2.Provider>
  );
}

export default App;
