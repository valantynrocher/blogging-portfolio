import useScrollTrigger from "@mui/material/useScrollTrigger"
import Zoom from "@mui/material/Zoom"
import scrollTo from "gatsby-plugin-smoothscroll"
import React from "react"
import { ScrollTopProps } from "./props"

const ScrollTop = (props: ScrollTopProps) => {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = () => {
    scrollTo("#top")
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation">
        {children}
      </div>
    </Zoom>
  )
}

export default ScrollTop
