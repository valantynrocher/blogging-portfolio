import { Theme } from "@mui/material/styles/createTheme"
import styled from "@mui/material/styles/styled"

const PREFIX = "MainLayout"

export const classes = {
  container: `${PREFIX}-container`,
  floatingActions: `${PREFIX}-floatingActions`,
  fab: `${PREFIX}-fab`,
}

export const StyledMainLayout = styled("div")(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",

  [`& .${classes.container}`]: {
    maxWidth: "72rem",
    padding: theme.spacing(3),
    flex: "1 1 auto",
    overflowY: "auto",
  },

  [`& .${classes.floatingActions}`]: {
    position: "fixed",
    top: "50%",
    right: 0,
    zIndex: 100,
    [`& .${classes.fab}`]: {
      borderTopRightRadius: 0,
    },
  },
}))
