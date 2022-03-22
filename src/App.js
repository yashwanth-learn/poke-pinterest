import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import PokemonContext from "./PokemonContext";

function App() {
  const [state, setState] = useState({
    savedPokemons: [],
    deletedPokemons: [],
    pokemons: [],
    nxtId: 1,
    loggedIn: false
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
