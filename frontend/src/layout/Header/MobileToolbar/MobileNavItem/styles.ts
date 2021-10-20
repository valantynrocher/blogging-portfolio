import Collapse from "@mui/material/Collapse"
import ListItemButton from "@mui/material/ListItemButton"
import styled from "@mui/material/styles/styled"

const PREFIX = "MobileNavItem"

export const classes = {
  popoverPaper: `${PREFIX}-popoverPaper`,
  arrowIcon: `${PREFIX}-arrowIcon`,
  arrowIconUp: `${PREFIX}-arrowIconUp`,
  color: `${PREFIX}-color`,
}

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.primary.light,

  [`& .${classes.arrowIcon}`]: {
    transition: "all .5s",
  },

  [`& .${classes.arrowIconUp}`]: {
    transform: "rotate(180deg)",
  },
  [`& .${classes.color}`]: {
    color: theme.palette.primary.light,
  },
}))

export const StyledCollapse = styled(Collapse)(({ theme }) => ({
  // [`& .${classes.popoverPaper}`]: {
  //   padding: theme.spacing(5, 3, 3),
  // },
})) as typeof Collapse
