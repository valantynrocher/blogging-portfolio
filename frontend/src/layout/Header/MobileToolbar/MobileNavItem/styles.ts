import Collapse from "@mui/material/Collapse"
import ListItemButton from "@mui/material/ListItemButton"
import styled from "@mui/material/styles/styled"

const PREFIX = "MobileNavItem"

export const classes = {
  popoverPaper: `${PREFIX}-popoverPaper`,
  arrowIcon: `${PREFIX}-arrowIcon`,
  arrowIconUp: `${PREFIX}-arrowIconUp`,
}

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  // [`& .${classes.arrowIconUp}`]: {
  //   transform: "rotate(180deg)",
  // },

  [`& .${classes.arrowIcon}`]: {
    transition: "all .5s",
  },

  [`& .${classes.arrowIconUp}`]: {
    transform: "rotate(180deg)",
  },
  arrowIcon: `${PREFIX}-arrowIcon`,
  arrowIconUp: `${PREFIX}-arrowIconUp`,
}))

export const StyledCollapse = styled(Collapse)(({ theme }) => ({
  // [`& .${classes.popoverPaper}`]: {
  //   padding: theme.spacing(5, 3, 3),
  // },
})) as typeof Collapse
