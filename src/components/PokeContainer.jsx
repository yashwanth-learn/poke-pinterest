import React, { useEffect, useRef } from "react";
import PokeGallery from "./PokeGallery";
import PokeHome from "./PokeHome";

export default function PokeContainer() {
  const scrollableDiv = useRef();
  const handleScroll = () => {
    console.log(scrollableDiv.current.clientHeight);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  });
  return (
    <div ref={scrollableDiv}>
      <PokeHome />
      <PokeGallery />
    </div>
  );
}
