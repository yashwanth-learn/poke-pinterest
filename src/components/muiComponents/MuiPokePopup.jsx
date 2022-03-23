import React, { useState, useContext, useEffect } from "react";
import PokemonContext from "../../PokemonContext";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  },
  width: "100%",
  textAlign: "center"
}));

const BootstrapDialogTitle = props => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

export default function MuiPokePopup(props) {
  const { state } = useContext(PokemonContext);
  const { handleClose, isOpen, pokeInfo } = props;
  const [relatives, setRelatives] = useState([]);
  const [width, setWidth] = useState("auto");
  useEffect(() => {
    const sameTypePokes = [];
    state.pokemons.map(pokemon => {
      if (pokemon.id !== pokeInfo.id) {
        pokeInfo.types.forEach(pokeType => {
          pokemon.types.forEach(pokemonType => {
            if (pokeType.type.name === pokemonType.type.name) {
              if (!sameTypePokes.includes(pokemon)) {
                sameTypePokes.push(pokemon);
              }
            }
          });
        });
      }
    });
    setRelatives(sameTypePokes);
    setWidth("100%");
  }, [pokeInfo]);
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        fullWidth={true}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span>
            <Typography variant="h5" component="h5">
              #{pokeInfo.id}
            </Typography>
            <Typography
              variant="button"
              component="h2"
              sx={{ fontSize: "1.875rem", letterSpacing: "1.0em" }}
            >
              {pokeInfo.name}
            </Typography>
          </span>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={pokeInfo?.sprites?.other?.dream_world?.front_default}
              alt={pokeInfo.id}
            />
          </Grid>
        </DialogContent>
        {/* <DialogContent dividers> */}
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
        {/* </DialogContent> */}
        <DialogContent dividers>
          <Grid
            container
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              justifyContent: "center",
              columnGap: "20px"
            }}
          >
            {relatives?.map(relative => {
              return (
                <div key={relative?.id}>
                  <img
                    src={relative?.sprites?.other?.dream_world?.front_default}
                    alt={relative?.id}
                    width={150}
                    height={150}
                  />
                  <p>
                    <strong>{relative?.name}</strong>
                  </p>
                </div>
              );
            })}
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
