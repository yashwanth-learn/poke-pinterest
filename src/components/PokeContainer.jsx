import React, { useState, useEffect, useRef } from "react";
import PokeGallery from "./PokeGallery";
import PokeHome from "./PokeHome";

export default function PokeContainer() {
  const scrollableDiv = useRef();
  const [getMore, setGetMore] =  useState(false);
  const handleScroll = () => {
   if(!((window.innerHeight + window.scrollY)  <= (document.body.scrollHeight))){
     setGetMore(true);
   }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    if(!getMore){
      window.scrollTo(0, 0);
    }
  },[getMore]);
  return (
    <div ref={scrollableDiv}>
      <PokeHome getMore={getMore} setGetMore={()=>setGetMore(!getMore)}/>
      <PokeGallery />
    </div>
  );
}
