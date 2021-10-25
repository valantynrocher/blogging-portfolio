import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha } from "@mui/system";
import clsx from "clsx";
import React from "react";
import { SiYourtraveldottv } from "react-icons/si";

interface PostsHeroProps {}

const PREFIX = "PostsHero";

export const classes = {
  image: `${PREFIX}-image`,
  top: `${PREFIX}-top`,
  topMobile: `${PREFIX}-topMobile`,
  titleBox: `${PREFIX}-titleBox`,
  avatar: `${PREFIX}-avatar`,
  textBox: `${PREFIX}-textBox`,
  avatarSmall: `${PREFIX}-avatarSmall`,
  bottom: `${PREFIX}-bottom`,
  bottomMobile: `${PREFIX}-bottomMobile`,
  breadcrumbs: `${PREFIX}-breadcrumbs`,
};

export const StyledPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: 300,

  [`& .${classes.top}`]: {
    "&:before": {
      top: 0,
      zIndex: 9,
      width: "100%",
      content: "''",
      height: "100%",
      position: "absolute",
      backgroundColor: alpha(theme.palette.primary.main, 0.65),
      backdropFilter: "blur(3px)",
    },
    [`& .${classes.titleBox}`]: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      zIndex: 99,
      marginTop: theme.spacing(5),
      right: "auto",
      left: theme.spacing(3),
      bottom: theme.spacing(3),
      [`& .${classes.avatar}`]: {
        position: "relative",
        width: 128,
        height: 128,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.primary.main,
        fontSize: 80,
      },
      [`& .${classes.textBox}`]: {
        marginLeft: theme.spacing(3),
        textAlign: "left",
        color: theme.palette.primary.contrastText,
      },
    },
    [`& .${classes.image}`]: {
      zIndex: 8,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "absolute",
    },
  },
  [`& .${classes.topMobile}`]: {
    display: "flex",
    justifyContent: "center",
    [`& .${classes.titleBox}`]: {
      position: "relative",
      flexDirection: "column",
      inset: 0,
      [`& .${classes.avatar}`]: {
        width: 80,
        height: 80,
        fontSize: 50,
      },
      [`& .${classes.textBox}`]: {
        textAlign: "center",
        marginLeft: 0,
      },
    },
  },

  [`& .${classes.bottom}`]: {
    position: "absolute",
    zIndex: 9,
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    height: 40,
    backgroundColor: theme.palette.primary.main,
    paddingRight: theme.spacing(6),
    [`& .${classes.breadcrumbs}`]: {
      display: "flex",
      alignItems: "center",
      color: theme.palette.primary.contrastText,
    },
  },
  [`& .${classes.bottomMobile}`]: {
    justifyContent: "center",
    paddingRight: 0,
  },
}));

const PostsHero = (props: PostsHeroProps) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(900));
  return (
    <StyledPaper>
      <div
        className={clsx(classes.top, {
          [classes.topMobile]: mobile,
        })}
      >
        <div className={classes.titleBox}>
          <Avatar className={classes.avatar}>
            <SiYourtraveldottv />
          </Avatar>
          <Box className={classes.textBox}>
            <Typography variant="h4">Voyages</Typography>
            <Typography variant="body1">En France et dans le Monde</Typography>
          </Box>
        </div>
        <img
          className={classes.image}
          src="/images/image1.jpg"
          alt="posts page hero"
        />
      </div>
      <div
        className={clsx(classes.bottom, {
          [classes.bottomMobile]: mobile,
        })}
      >
        <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
          <Typography variant="caption" color="inherit">
            Explorer
          </Typography>
          <Typography variant="caption" color="inherit">
            Voyages
          </Typography>
        </Breadcrumbs>
      </div>
    </StyledPaper>
  );
};

export default PostsHero;
