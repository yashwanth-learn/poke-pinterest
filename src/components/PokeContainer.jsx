import React from "react";
import { Link } from "react-router-dom";

export default function PokeContainer() {
  return (
    <>
      <div style={{height:"40px",backgroundColor:"yellow"}}>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/gallery">Gallery</Link>
        </button>
      </div>
    </>
  );
}
