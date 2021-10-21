import Breadcrumbs from "@mui/material/Breadcrumbs"
import Paper from "@mui/material/Paper"
import styled from "@mui/material/styles/styled"
import Typography from "@mui/material/Typography"
import { alpha } from "@mui/system"
import React from "react"
import Seo from "../components/Seo"

interface PostsPageHeroProps {}

const PREFIX = "PostsPageHero"

export const classes = {
  image: `${PREFIX}-image`,
  imageContainer: `${PREFIX}-imageContainer`,
  textContainer: `${PREFIX}-textContainer`,
  breadcrumbsContainer: `${PREFIX}-breadcrumbsContainer`,
  breadcrumbsNav: `${PREFIX}-breadcrumbsNav`,
}

export const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: 300,
  [`& .${classes.image}`]: {
    zIndex: 8,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
  },
  [`& .${classes.imageContainer}`]: {
    "&:before": {
      top: 0,
      zIndex: 9,
      width: "100%",
      content: "''",
      height: "100%",
      position: "absolute",
      // backdropFilter: blur(3px),
      backgroundColor: alpha(theme.palette.primary.main, 0.5),
    },
    [`& .${classes.textContainer}`]: {
      position: "absolute",
      zIndex: 99,
      marginTop: theme.spacing(5),
      right: "auto",
      left: theme.spacing(3),
      bottom: theme.spacing(3),
    },
  },
  [`& .${classes.breadcrumbsContainer}`]: {
    position: "absolute",
    zIndex: 9,
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    height: 40,
    backgroundColor: theme.palette.primary.main,
    paddingRight: theme.spacing(3),
    [`& .${classes.breadcrumbsNav}`]: {
      display: "flex",
      alignItems: "center",
      color: theme.palette.secondary.contrastText,
    },
  },
}))

const PostsPageHero = (props: PostsPageHeroProps) => {
  return (
    <StyledPaper>
      <div className={classes.imageContainer}>
        <div className={classes.textContainer}>
          <Typography variant="h4">Voyages</Typography>
          <Typography variant="body1">
            bla bla bla bla bla bla bla bla...
          </Typography>
        </div>
        <img
          className={classes.image}
          src="/images/image1.jpg"
          alt="posts page hero"
        />
      </div>
      <div className={classes.breadcrumbsContainer}>
        <Breadcrumbs className={classes.breadcrumbsNav} aria-label="breadcrumb">
          <Typography color="inherit">Explorer</Typography>
          <Typography color="inherit">Voyages</Typography>
        </Breadcrumbs>
      </div>
    </StyledPaper>
  )
}

const IndexPage = () => {
  return (
    <React.Fragment>
      <Seo title="" />
      <PostsPageHero />
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
