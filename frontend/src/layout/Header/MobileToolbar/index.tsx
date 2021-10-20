import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import React, { useState } from "react"
import { FaHamburger } from "react-icons/fa"
import ThemeModeButton from "../../../components/ThemeModeButton"
import { menuItems } from ".."
import MobileNavItem from "./MobileNavItem"
import { MobileToolbarProps } from "./props"
import { classes, StyledSwipeableDrawer, StyledToolbar } from "./styles"

const MobileToolbar = (props: MobileToolbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOpen = (event: any) => {
    setMenuOpen(true)
  }
  const handleClose = () => {
    setMenuOpen(false)
  }
  return (
    <React.Fragment>
      <StyledToolbar>
        <IconButton
          onClick={handleOpen}
          aria-label="mobile menu button"
          color="primary"
          size="large"
        >
          <FaHamburger />
        </IconButton>

        <ThemeModeButton
          Wrapper={IconButton}
          ButtonProps={{
            size: "large",
          }}
        />
      </StyledToolbar>
      <StyledSwipeableDrawer
        anchor="left"
        open={menuOpen}
        onClose={handleClose}
        aria-label="mobile menu"
        onOpen={() => console.log("SwipeableDrawer > onOpen")}
        classes={{
          paper: classes.paper,
        }}
      >
        <List
          component="nav"
          disablePadding
          aria-label="navigation menu mobile"
          className={classes.nav}
        >
          {menuItems.map((props) => (
            <MobileNavItem key={props.text} {...props} />
          ))}
        </List>
      </StyledSwipeableDrawer>
    </React.Fragment>
  )
}

export default MobileToolbar
