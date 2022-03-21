import React, { useContext, useEffect, useState } from "react";
import PokemonContext from "../PokemonContext";
import "./PokePopup.css";

export default function PokePopup(props) {
  const { state, setState } = useContext(PokemonContext);
  const { pokeInfo } = props;
  const [relatives, setRelatives] = useState([]);
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
  }, [pokeInfo]);
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div>
          <div className="poke-img-div">
            <img
              className="poke-img"
              src={pokeInfo?.sprites?.other?.dream_world?.front_default}
              alt={pokeInfo?.id}
            />
          </div>
          <div className="poke-details-div">
            <span>
              <p>Name</p>
              <p>
                <strong>{pokeInfo.name}</strong>
              </p>
            </span>
            <span>
              <p>Type</p>
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
              <p>
                <strong>{pokeInfo.base_experience}</strong>
              </p>
            </span>
            <span>
              <p>Height</p>
              <p>
                <strong>{pokeInfo.height}</strong>
              </p>
            </span>
            <span>
              <p>Weight</p>
              <p>
                <strong>{pokeInfo.weight}</strong>
              </p>
            </span>
          </div>
        </div>
        <div className="poke-relatives-div">
          <hr />
          <span>Relatives</span>
          <hr />
          <div className="relative-img-div">
            {relatives?.map(relative => {
              return (
                <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
