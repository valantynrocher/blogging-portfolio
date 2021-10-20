import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import clsx from "clsx"
import React, { useState } from "react"
import { FaCaretDown } from "react-icons/fa"
import { handleNavigate } from "../../../../utils"
import { MenuItemProps } from "../../props"
import { classes, StyledCollapse, StyledListItemButton } from "./styles"

const MobileNavItem = (props: MenuItemProps) => {
  const { Icon, text, to, SubmenuComponent } = props
  const [menuOpen, setMenuOpen] = useState(false)
  const hasMenu = Boolean(SubmenuComponent)

  const handleClick = () => {
    if (hasMenu) setMenuOpen(!menuOpen)
    else if (to) {
      handleNavigate(to)
    }
  }

  return (
    <React.Fragment>
      <StyledListItemButton onClick={handleClick}>
        <ListItemIcon>
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
