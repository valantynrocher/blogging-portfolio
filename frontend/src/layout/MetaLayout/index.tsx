import Fab from "@mui/material/Fab"
import React from "react"
import { MdArrowUpward } from "react-icons/md"
import Footer from "../Footer"
import Header from "../Header"
import ScrollTop from "../ScrollTop"
import { MetaLayoutProps } from "./props"

const MetaLayout = (props: MetaLayoutProps) => {
  return (
    <div id="top">
      <Header />
      <main>{props.children}</main>
      <Footer />

      <ScrollTop {...props}>
        <Fab aria-label="Haut de page">
          <MdArrowUpward />
        </Fab>
      </ScrollTop>
    </div>
  )
}

export default MetaLayout
