import React from "react";
import PokeCard from "./PokeCard";
import MuiPokeCard from "./muiComponents/MuiPokeCard";
import { Grid } from "@mui/material";

export default function CardRow(props) {
  const { pokemonSet, parent } = props;
  return (
    <Grid
      container
      columns={{ xs: 1, sm: 1, md: 12}}
      columnSpacing = {{ xs: 10 , sm: 10, md: 15 }}
      style={{
        width: "100%",
        display: "inline-flex",
        justifyContent: "center",
        marginTop: "50px"
      }}
    >
      {pokemonSet?.map(pokemon => {
        // console.log("In Pokecard:", pokemonSet);
        // return (
        //   <PokeCard key={pokemon.id} pokemonObj={pokemon} parent={parent} />
        // );

        return (
          <Grid item key={pokemon.id} xs={1} sm={1} md={3} >
            <MuiPokeCard
              pokemonObj={pokemon}
              parent={parent}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
