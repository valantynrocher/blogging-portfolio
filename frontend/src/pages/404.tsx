import Link from "@mui/material/Link"
import { default as Typography } from "@mui/material/Typography"
import { Link as GatsbyLink } from "gatsby"
import React from "react"
import Seo from "../components/Seo"

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Seo title="Page inconnue" />
      <div>
        <Typography align="center" variant="h2" gutterBottom component="h1">
          Oups....
        </Typography>
        <Typography align="center" variant="body1">
          La page que vous demandez n'existe pas.{" "}
          <Link component={GatsbyLink} to="/" underline="hover">
            Retour à l'accueil
          </Link>
        </Typography>
      </div>
    </React.Fragment>
  )
}

export default NotFoundPage
