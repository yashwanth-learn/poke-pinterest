import React, { useState, useContext } from "react";
import PokemonContext from "../PokemonContext";
import PokePopup from "./PokePopup";
import "./PokeCard.css";

export default function PokeCard(props) {
  const { pokemonObj } = props;
  console.log("In the PokeCard", pokemonObj);
  const { state, setState } = useContext(PokemonContext);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleOnDelete = () => {
    console.log("Poke card state", state);
    let updatedPokemons = state.pokemons;
    updatedPokemons = updatedPokemons.filter(pokemon => {
      if (pokemon.id !== pokemonObj.id) {
        return pokemon;
      }
    });
    console.log("updated pokemons after deleting", updatedPokemons);
    console.log("Poke card state before setting state", state);
    let updatedState = state;
    updatedState.pokemons = updatedPokemons;
    setState(updatedState);
    console.log("Poke card state after setting state", state);
  };
  const handleOnSave = () => {
    console.log("Poke card state", state);
    const updatedSavedPokemons = state.savedPokemons;
    updatedSavedPokemons.push(pokemonObj);
    setState(state => ({ ...state, savedPokemons: updatedSavedPokemons }));
    console.log("Poke card state after setting state", state);
  };
  return (
    <div className="card">
      <img
        onClick={togglePopup}
        alt={"hello"}
        src={pokemonObj?.sprites?.other?.dream_world?.front_default}
        className="card-img"
      />

      <span>
        <p><b>#{pokemonObj.id}</b></p>
        <p><b>{pokemonObj.name}</b></p>
      </span>
      <div>
        <button onClick={handleOnSave}>Add to Gallery</button>
        <button onClick={handleOnDelete}>Remove</button>
      </div>
      {isOpen && <PokePopup pokeInfo={pokemonObj} handleClose={togglePopup} />}
    </div>
  );
}
