import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PokeHome from "./PokeHome";
import PokeGallery from "./PokeGallery";
import PokeContainer from "./PokeContainer";

export default function Navigation() {
  const [getMore, setGetMore] = useState(false);
  const handleScroll = () => {
    if (!(window.innerHeight + window.scrollY <= document.body.scrollHeight)) {
      setGetMore(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  }, [getMore]);
  return (
    <Router>
      <div style={{ height: "25px" }}>
        <PokeContainer />
        <Routes>
          <Route
            path="/"
            element={
              <PokeHome
                getMore={getMore}
                setGetMore={() => setGetMore(!getMore)}
              />
            }
          />
          <Route path="/gallery" element={<PokeGallery />} />
        </Routes>
      </div>
    </Router>
  );
}
