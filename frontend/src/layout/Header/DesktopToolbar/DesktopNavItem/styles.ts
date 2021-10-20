import Popover from "@mui/material/Popover"
import styled from "@mui/material/styles/styled"
import Link from "../../../../components/Link"

const PREFIX = "DesktopNavItem"

export const classes = {
  popoverPaper: `${PREFIX}-popoverPaper`,
  icon: `${PREFIX}-icon`,
  label: `${PREFIX}-label`,
  arrowIcon: `${PREFIX}-arrowIcon`,
  arrowIconUp: `${PREFIX}-arrowIconUp`,
}

export const StyledLink = styled(Link)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginRight: theme.spacing(5),
  color: theme.palette.primary.light,
  padding: theme.spacing(5, 1, 2),
  "&: hover": {
    color: theme.palette.primary.main,
  },

  [`& .${classes.icon}`]: {
    marginBottom: theme.spacing(),
  },

  [`& .${classes.label}`]: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },

  [`& .${classes.arrowIcon}`]: {
    transition: "all .5s",
  },

  [`& .${classes.arrowIconUp}`]: {
    transform: "rotate(180deg)",
  },
}))

export const StyledPopover = styled(Popover)(({ theme }) => ({
  [`& .${classes.popoverPaper}`]: {
    padding: theme.spacing(5, 3, 3),
  },
})) as typeof Popover
