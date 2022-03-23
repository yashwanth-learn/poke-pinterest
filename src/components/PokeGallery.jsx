import React, { useEffect, useState, useContext } from "react";
import PokemonContext from "../PokemonContext";
import sliceForRows from "../utils/pokeUtils";
import CardRow from "./CardRow";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";

export default function PokeGallery() {
  const [pokemonSets, setPokemonSets] = useState([]);
  const { state } = useContext(PokemonContext);
  const savedPokemons = state?.savedPokemons;
  const showGoHome = !savedPokemons?.length;
  console.log("In Poke gallery:", showGoHome);
  useEffect(() => {
    setPokemonSets(sliceForRows(savedPokemons));
  }, [savedPokemons]);

  return (
    <>
      <div>
        {pokemonSets.map((pokemonSet, index) => {
          return (
            <CardRow key={index} pokemonSet={pokemonSet} parent="gallery" />
          );
        })}
      </div>
      {showGoHome && (
        <div>
          <Dialog
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            open={true}
          >
            <DialogTitle id="alert-dialog-title">OOPS...</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You do not have any pokemon in your favorites currently. Please
                navigate to home page and add pokemons to favorites.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button>
                <Link to="/">Go to home tab</Link>
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
}
