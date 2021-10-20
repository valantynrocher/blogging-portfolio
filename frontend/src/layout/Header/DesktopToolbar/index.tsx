import React from "react"
import { menuItems } from ".."
import DesktopNavItem from "./DesktopNavItem"
import { DesktopToolbarProps } from "./props"
import { StyledToolbar } from "./styles"

const DesktopToolbar = (props: DesktopToolbarProps) => {
  return (
    <React.Fragment>
      <StyledToolbar component="nav" aria-label="navigation menu desktop">
        {menuItems.map((props) => (
          <DesktopNavItem key={props.text} {...props} />
        ))}
      </StyledToolbar>
    </React.Fragment>
  )
}

export default DesktopToolbar
