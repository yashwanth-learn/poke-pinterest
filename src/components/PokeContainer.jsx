import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function PokeContainer() {
  return (
    <>
      <div style={{ height: "40px", backgroundColor: "yellow" }}>
        <div>
          <div style={{ float: "right", marginRight: "5px", columnGap: "5px" }}>
            <AccountCircleIcon color="success" fontSize="large" />
            <Link to="/">
              <LogoutIcon color="success" fontSize="large" />
            </Link>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", display: "inline-flex" }}>
        <div style={{ width: "50%" }}>
          <button style={{ float: "right", marginRight: "5px" }}>
            <Link to="/">
              <HomeIcon color="primary" fontSize="large" />
            </Link>
          </button>
        </div>
        <Divider orientation="vertical" flexItem />
        <div style={{ width: "50%" }}>
          <button style={{ float: "left", marginLeft: "5px" }}>
            <Link to="/gallery">
              <CollectionsIcon color="primary" fontSize="large" />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
