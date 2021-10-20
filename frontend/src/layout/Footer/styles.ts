import styled from "@mui/material/styles/styled"

const PREFIX = "Footer"

export const classes = {
  icon: `${PREFIX}-icon`,
}

export const StyledFooter = styled("footer")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  [`& .${classes.icon}`]: {
    color: theme.palette.primary.main,
    margin: theme.spacing(0, 0.5),
  },
}))
