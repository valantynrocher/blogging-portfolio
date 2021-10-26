import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";

const PREFIX = "PostsHero";

export const classes = {
  card: `${PREFIX}-card`,
  cardHeader: `${PREFIX}-cardHeader`,
  cardContent: `${PREFIX}-cardContent`,
  box: `${PREFIX}-box`,
  avatar: `${PREFIX}-avatar`,
  image: `${PREFIX}-image`,
};

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3),
  [`& .${classes.card}`]: {
    backgroundImage: "none",
    [`& .${classes.cardHeader}`]: {
      position: "relative",
      paddingTop: "calc(75%)",
      [`& .${classes.box}`]: {
        position: "absolute",
        width: 80,
        height: 36,
        bottom: -15,
        mask: "url(images/shape-avatar.svg) center center / contain no-repeat",
        zIndex: 9,
        backgroundColor: theme.palette.background.paper,
      },
      [`& .${classes.avatar}`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.25rem",
        borderRadius: "50%",
        overflow: "hidden",
        userSelect: "none",
        zIndex: 9,
        width: 32,
        height: 32,
        position: "absolute",
        left: 24,
        bottom: -16,
        backgroundColor: theme.palette.primary.main,
      },
      [`& .${classes.image}`]: {
        position: "absolute",
        top: 0,
        objectFit: "cover",
        width: "100%",
        height: "100%",
      },
    },
    [`& .${classes.cardContent}`]: {
      padding: theme.spacing(4, 3, 3),
    },
  },
}));
