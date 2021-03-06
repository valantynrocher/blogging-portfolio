import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import clsx from "clsx"
import React, { useState } from "react"
import { handleNavigate } from "../../../../utils"
import { MenuItemProps } from "../../props"
import { classes, StyledLink, StyledPopover } from "./styles"

const DesktopNavItem = (props: MenuItemProps) => {
  const { text, SubmenuComponent, to, Icon } = props

  const [anchorMenu, setAnchorMenu] = useState<HTMLAnchorElement | null>(null)
  const hasMenu = Boolean(SubmenuComponent)

  const handleMenuOpen = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorMenu(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorMenu(null)
  }

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (hasMenu) handleMenuOpen(event)
    else if (to) handleNavigate(to)
  }

  return (
    <React.Fragment>
      <StyledLink onClick={handleClick} variant="button" underline="none">
        <React.Fragment>
          <Icon className={classes.icon} fontSize="large" />
          <div className={classes.label}>
            {text}
            {hasMenu && (
              <ArrowDropDownIcon
                className={clsx(classes.arrowIcon, {
                  [classes.arrowIconUp]: Boolean(anchorMenu),
                })}
              />
            )}
          </div>
        </React.Fragment>
      </StyledLink>
      {hasMenu && (
        <StyledPopover
          open={hasMenu && Boolean(anchorMenu)}
          anchorEl={anchorMenu}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          elevation={0}
          classes={{
            paper: classes.popoverPaper,
          }}
        >
          {SubmenuComponent}
        </StyledPopover>
      )}
    </React.Fragment>
  )
}

export default DesktopNavItem
