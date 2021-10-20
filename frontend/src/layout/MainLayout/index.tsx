import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Fab from "@mui/material/Fab"
import React, { useContext } from "react"
import ThemeModeButton from "../../components/ThemeModeButton"
import LayoutContext from "../Context/LayoutContext"
import Footer from "../Footer"
import Header from "../Header"
import { MainLayoutProps } from "./props"
import { classes, StyledMainLayout } from "./styles"

const MainLayout = (props: MainLayoutProps) => {
  const { mode, toggleMode, isMobile } = useContext(LayoutContext)
  return (
    <StyledMainLayout id="top">
      <Header />
      <Container
        component="main"
        classes={{ maxWidthLg: classes.container }}
        disableGutters
      >
        {props.children}
      </Container>
      <Footer />

      {!isMobile && (
        <Box className={classes.floatingActions}>
          <ThemeModeButton Wrapper={Fab} className={classes.fab} />
        </Box>
      )}
      {/* <ScrollTop>
        <Fab aria-label="Haut de page">
          <MdArrowUpward />
        </Fab>
      </ScrollTop> */}
    </StyledMainLayout>
  )
}

export default MainLayout
