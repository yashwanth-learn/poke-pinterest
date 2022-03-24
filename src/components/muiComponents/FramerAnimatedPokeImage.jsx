import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

const FramerAnimatedPokeImage = props => {
  const { pokeInfo } = props;
  return (
    <Grid style={{ display: "flex", justifyContent: "center" }}>
      <motion.div
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
          rotate: [0, 0, -360, -360, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 0,
          repeatDelay: 1
        }}
      >
        <img
          src={pokeInfo?.sprites?.other?.dream_world?.front_default}
          alt={pokeInfo.id}
          width="200px"
          height="200px"
        />
      </motion.div>
    </Grid>
  );
};

export default FramerAnimatedPokeImage;
