import { createTheme } from "@mui/material/styles"
import { yellow, deepPurple, amber, purple } from "@mui/material/colors"

const baseTheme = createTheme({
  shape: {
    borderRadius: "1.5rem",
  },
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    background: {
      default: deepPurple[900],
      paper: deepPurple[800],
    },
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: amber[500],
    },
  },
})
const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    background: {
      default: yellow[200],
      paper: yellow[100],
    },
    primary: {
      main: purple[900],
    },
    secondary: {
      main: deepPurple[500],
    },
  },
})

export default { dark: darkTheme, light: lightTheme }
