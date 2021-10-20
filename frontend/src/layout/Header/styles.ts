import AppBar from "@mui/material/AppBar"
import styled from "@mui/material/styles/styled"

const PREFIX = "Header"

export const classes = {}

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  backgroundImage: "none",
}))
