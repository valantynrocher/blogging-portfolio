import Toolbar from "@mui/material/Toolbar"
import styled from "@mui/material/styles/styled"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"

const PREFIX = "MobileToolbar"

export const classes = {
  paper: `${PREFIX}-paper`,
  nav: `${PREFIX}-nav`,
}

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(2),

  // [`& .${classes.popoverPaper}`]: {
  //   padding: theme.spacing(5, 3, 3),
  // },
}))

export const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  [`& .${classes.paper}`]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    inset: 0,
    backgroundImage: "none",
  },

  [`& .${classes.nav}`]: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))
