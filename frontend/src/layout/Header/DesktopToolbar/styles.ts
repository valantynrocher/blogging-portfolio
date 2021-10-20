import Popover from "@mui/material/Popover"
import styled from "@mui/material/styles/styled"
import Toolbar from "@mui/material/Toolbar"

const PREFIX = "DesktopToolbar"

export const classes = {
  popoverPaper: `${PREFIX}-popoverPaper`,
  link: `${PREFIX}-link`,
  arrowIcon: `${PREFIX}-arrowIcon`,
  arrowIconUp: `${PREFIX}-arrowIconUp`,
}

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  [`& .${classes.link}`]: {
    marginRight: theme.spacing(5),
    color: theme.palette.primary.light,
    padding: theme.spacing(5, 1, 2),
    "&: hover": {
      color: theme.palette.primary.main,
    },
  },

  [`& .${classes.arrowIcon}`]: {
    transition: "all .5s",
  },

  [`& .${classes.arrowIconUp}`]: {
    transform: "rotate(180deg)",
  },
})) as typeof Toolbar

export const StyledPopover = styled(Popover)(({ theme }) => ({
  [`& .${classes.popoverPaper}`]: {
    padding: theme.spacing(5, 3, 3),
  },
})) as typeof Popover
