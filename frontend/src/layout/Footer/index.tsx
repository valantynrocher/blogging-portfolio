import React from "react"
import { classes, StyledFooter } from "./styles"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import Toolbar from "@mui/material/Toolbar"

const Footer = () => {
  return (
    <StyledFooter>
      <Toolbar
        sx={{
          pt: 2,
          pb: 2,
        }}
      >
        Développé avec
        <FavoriteBorderIcon className={classes.icon} fontSize="small" /> par
        moi-même
      </Toolbar>
    </StyledFooter>
  )
}

export default Footer
