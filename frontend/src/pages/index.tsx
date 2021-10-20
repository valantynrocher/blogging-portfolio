import Button from "@mui/material/Button"
import React, { useContext } from "react"
import Seo from "../components/Seo"
import LayoutContext from "../layout/Context/LayoutContext"

const IndexPage = () => {
  const { mode, toggleMode } = useContext(LayoutContext)

  return (
    <React.Fragment>
      <Seo title="" />
    </React.Fragment>
  )
}

export default IndexPage
