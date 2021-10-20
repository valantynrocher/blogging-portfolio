import Button from "@mui/material/Button"
import React, { useContext } from "react"
import Seo from "../components/Seo"
import LayoutContext from "../layout/Context/LayoutContext"

const IndexPage = () => {
  const { mode, toggleMode } = useContext(LayoutContext)

  return (
    <React.Fragment>
      <Seo title="" />
      {[...new Array(12)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join("\n")}
    </React.Fragment>
  )
}

export default IndexPage
