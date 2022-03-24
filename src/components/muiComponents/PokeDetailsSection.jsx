import React from "react";
import { Grid } from "@mui/material";

export default function PokeDetailsSection(props) {
  const { pokeInfo } = props;
  return (
    <Grid style={{ display: "flex", justifyContent: "space-around" }}>
      <span>
        <p>Name</p>
        <hr />
        <p>
          <strong>{pokeInfo.name}</strong>
        </p>
      </span>
      <span>
        <p>Type</p>
        <hr />
        {pokeInfo.types.map((type, index) => {
          return (
            <p key={index}>
              <strong>{type.type.name}</strong>
            </p>
          );
        })}
      </span>
      <span>
        <p>Base Experience</p>
        <hr />
        <p>
          <strong>{pokeInfo.base_experience}</strong>
        </p>
      </span>
      <span>
        <p>Height</p>
        <hr />
        <p>
          <strong>{pokeInfo.height}</strong>
        </p>
      </span>
      <span>
        <p>Weight</p>
        <hr />
        <p>
          <strong>{pokeInfo.weight}</strong>
        </p>
      </span>
    </Grid>
  );
}
