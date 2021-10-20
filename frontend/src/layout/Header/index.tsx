import useScrollTrigger from "@mui/material/useScrollTrigger"
import React, { useContext } from "react"
import LayoutContext from "../Context/LayoutContext"
import DesktopToolbar from "./DesktopToolbar"
import MobileToolbar from "./MobileToolbar"
import { HeaderProps, MenuItemProps } from "./props"
import { StyledAppBar } from "./styles"
import { FaHome, FaRoute, FaTh, FaComments } from "react-icons/fa"

export const menuItems: MenuItemProps[] = [
  {
    text: "Accueil",
    Icon: FaHome,
    to: "/",
  },
  {
    text: "A propos",
    Icon: FaRoute,
    to: "/",
  },
  {
    text: "Explorer",
    Icon: FaTh,
    SubmenuComponent: <div>Sous-menu Explorer</div>,
  },
  {
    text: "Me contacter",
    Icon: FaComments,
    to: "/",
  },
]

const ElevationScroll = (props: { children: any }) => {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const Header = (props: HeaderProps) => {
  const { isMobile } = useContext(LayoutContext)

  return (
    <ElevationScroll {...props}>
      <StyledAppBar position="sticky">
        {isMobile ? <MobileToolbar /> : <DesktopToolbar />}
      </StyledAppBar>
    </ElevationScroll>
  )
}

export default Header
