import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import React, { useContext } from "react"
import LayoutContext from "../../layout/Context/LayoutContext"
import { ThemeModeButtonProps } from "./props"

const ThemeModeButton = (props: ThemeModeButtonProps) => {
  const { Wrapper, className, ButtonProps } = props
  const { mode, toggleMode } = useContext(LayoutContext)
  return (
    <Wrapper
      onClick={() => toggleMode()}
      aria-label="theme mode"
      color="primary"
      className={className}
      {...ButtonProps}
    >
      {mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
    </Wrapper>
  )
}

export default ThemeModeButton
