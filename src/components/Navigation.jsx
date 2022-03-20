import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PokeHome from "./PokeHome";
import PokeGallery from "./PokeGallery";
import PokeContainer from "./PokeContainer";

export default function Navigation() {
  // const renderHello = ()=>{
  //     return <PokeGallery/>
  // }

  return (
    <Router>
      <div style={{ height: "25px" }}>
        {/* <nav>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/gallery">Gallery</Link>
          </button>
        </nav> */}

        <PokeContainer />
        <Routes>
          <Route path="/" element={<PokeHome />} />
          <Route path="/gallery" element={<PokeGallery />} />
        </Routes>
      </div>
    </Router>
  );
}
