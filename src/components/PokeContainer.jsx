import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Divider } from "@mui/material";
import PokeLogo from "../images/PokeLogo.png";

export default function PokeContainer(props) {
  const { setFirstTime } = props;
  return (
    <>
      <div
        style={{
          backgroundColor: "yellow",
          width: "100%",
          display: "inline-flex"
        }}
      >
        <div style={{ width: "50%" }}>
          <Link to="/" onClick={setFirstTime}>
            <img
              style={{ float: "left" }}
              src={PokeLogo}
              width={150}
              height={50}
              alt="logo"
            />
          </Link>
          <button
            style={{ float: "right", marginRight: "5px", marginTop: "2px" }}
          >
            <Link to="/home">
              <HomeIcon color="primary" fontSize="large" />
            </Link>
          </button>
        </div>
        <Divider orientation="vertical" flexItem />
        <div style={{ width: "50%" }}>
          <button
            style={{ float: "left", marginLeft: "5px", marginTop: "2px" }}
          >
            <Link to="/gallery">
              <CollectionsIcon color="primary" fontSize="large" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
