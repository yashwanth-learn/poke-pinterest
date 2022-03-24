import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokeHome from "./PokeHome";
import PokeGallery from "./PokeGallery";
import PokeContainer from "./PokeContainer";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [getMore, setGetMore] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const handleScroll = () => {
    if (
      !(window.innerHeight + window.scrollY <= document.body.scrollHeight - 60)
    ) {
      setGetMore(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  }, [getMore]);
  return (
    <Router>
      <div style={{ height: "25px" }}>
        {firstTime ? (
          <div>
            <Dialog
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              open={true}
            >
              <DialogTitle
                id="alert-dialog-title"
                style={{ textAlign: "center" }}
              >
                Welcome to Poke-Pinterest
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <p>Please follow instructions below:</p>
                  <div>
                    <ul>
                      <li>scroll down to load more pokemons.</li>
                      <li>click on pokemon image to view more details.</li>
                      <li>click on like icon to save pokemon to gallery.</li>
                      <li>
                        click on dislike icon to remove pokemon from home page.
                      </li>
                      <li>
                        click on saved files icon on the top to view your
                        favorite pokemon collection.
                      </li>
                    </ul>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setFirstTime(false)}>
                  <Link to="/home">Get Started</Link>
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        ) : (
          <PokeContainer setFirstTime={() => setFirstTime(true)} />
        )}
        <Routes>
          <Route
            path="/home"
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
