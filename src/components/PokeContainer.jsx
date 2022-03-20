import React, { useState, useEffect, useRef } from "react";
import PokeGallery from "./PokeGallery";
import PokeHome from "./PokeHome";
import Navigation from "./Navigation";
import { PokemonProvider } from "../PokemonContext";
import { Link } from "react-router-dom";

export default function PokeContainer() {
  const scrollableDiv = useRef();
  const [getMore, setGetMore] = useState(false);
  const handleScroll = () => {
    if (!(window.innerHeight + window.scrollY <= document.body.scrollHeight)) {
      setGetMore(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    if (!getMore) {
      window.scrollTo(0, 0);
    }
  }, [getMore]);

  const renderHome = () => {
    return (
      <PokeHome getMore={getMore} setGetMore={() => setGetMore(!getMore)} />
    );
  };
  const renderGallery = () => {
    return <PokeGallery />;
  };
  return (
    <>
      <div ref={scrollableDiv}>
        {/* <PokemonProvider> */}
        {/* <Navigation /> */}
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/gallery">Gallery</Link>
        </button>
        {/* </PokemonProvider> */}
      </div>
    </>
  );
}
