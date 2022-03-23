import React, { useState, useContext } from "react";
import PokemonContext from "../../PokemonContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import MuiPokePopup from "./MuiPokePopup";
import "./MuiPokeCard.css";

export default function MuiPokeCard(props) {
  const { pokemonObj, parent } = props;
  const { state, setState } = useContext(PokemonContext);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleOnDelete = () => {
    let updatedPokemons = state.pokemons;
    updatedPokemons = updatedPokemons.filter(pokemon => {
      if (pokemon.id !== pokemonObj.id) {
        return pokemon;
      }
    });
    setState(state => ({ ...state, pokemons: updatedPokemons }));
  };
  const handleOnSave = () => {
    const updatedSavedPokemons = state.savedPokemons;
    updatedSavedPokemons.push(pokemonObj);
    setState(state => ({ ...state, savedPokemons: updatedSavedPokemons }));
    handleOnDelete();
  };
  return (
    <>
      <Card className="muiCard">
        <CardMedia
          component="img"
          alt="green iguana"
          src={pokemonObj?.sprites?.other?.dream_world?.front_default}
          onClick={togglePopup}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            #{pokemonObj.id}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {pokemonObj.name}
          </Typography>
        </CardContent>
        {parent === "home" && (
          <CardActions>
            <Button onClick={handleOnSave} size="small">
              <ThumbUpAltIcon color="primary" />
            </Button>
            <Button onClick={handleOnDelete} size="small">
              <ThumbDownAltIcon color="primary" />
            </Button>
          </CardActions>
        )}
      </Card>
      <MuiPokePopup pokeInfo={pokemonObj} handleClose={togglePopup} isOpen={isOpen} />
    </>
  );
}
