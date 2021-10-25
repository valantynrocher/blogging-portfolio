import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
import Typography from "@mui/material/Typography";
import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
import Link from "../../../components/Link";

interface PostCardProps {}

const PREFIX = "PostsHero";

export const classes = {
  card: `${PREFIX}-card`,
  cardHeader: `${PREFIX}-cardHeader`,
  cardContent: `${PREFIX}-cardContent`,
  box: `${PREFIX}-box`,
  avatar: `${PREFIX}-avatar`,
  image: `${PREFIX}-image`,
};

export const StyledGrid = styled(Grid)(({ theme }) => ({
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

const PostCard = (props: PostCardProps) => {
  return (
    <StyledGrid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <div className={classes.cardHeader}>
          <Box component="span" className={classes.box}></Box>
          <Avatar className={classes.avatar}>
            <SiYourtraveldottv />
          </Avatar>
          <img
            className={classes.image}
            src="/images/image1.jpg"
            alt="posts page hero"
          />
        </div>
        <CardContent className={classes.cardContent}>
          <Typography variant="caption" gutterBottom>
            Date
          </Typography>
          <Link underline="hover">Titre cliquable</Link>
        </CardContent>
      </Card>
    </StyledGrid>
  );
};

export default PostCard;
