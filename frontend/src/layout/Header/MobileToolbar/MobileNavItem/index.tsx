import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import clsx from "clsx"
import React, { useState } from "react"
import { FaCaretDown } from "react-icons/fa"
import { handleNavigate } from "../../../../utils"
import { MenuItemProps } from "../../props"
import { classes as headerClasses } from "../../styles"
import { classes, StyledCollapse, StyledListItemButton } from "./styles"

const MobileNavItem = (
  props: MenuItemProps & {
    onClose: () => void
  }
) => {
  const { Icon, text, to, SubmenuComponent, onClose } = props
  const [menuOpen, setMenuOpen] = useState(false)
  const hasMenu = Boolean(SubmenuComponent)

  const handleClick = () => {
    if (hasMenu) setMenuOpen(!menuOpen)
    else if (to) {
      handleNavigate(to)
      onClose()
    }
  }

  return (
    <React.Fragment>
      <StyledListItemButton onClick={handleClick}>
        <ListItemIcon className={classes.color}>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
        {hasMenu && (
          <FaCaretDown
            className={clsx(classes.arrowIcon, {
              [classes.arrowIconUp]: menuOpen,
            })}
          />
        )}
      </StyledListItemButton>
      {hasMenu && (
        <StyledCollapse in={menuOpen} timeout="auto" unmountOnExit>
          {SubmenuComponent}
        </StyledCollapse>
      )}
    </React.Fragment>
  )
}

export default MobileNavItem
