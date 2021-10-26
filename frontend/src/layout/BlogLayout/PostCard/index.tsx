import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import Link from "../../../components/Link";
import { PostCardProps } from "./props";
import { classes, StyledGridItem } from "./styles";

const PostCard = (props: PostCardProps) => {
  const { image, title, date, Icon } = props;
  return (
    <StyledGridItem item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <div className={classes.cardHeader}>
          <Box component="span" className={classes.box}></Box>
          <Avatar className={classes.avatar}>
            <Icon />
          </Avatar>
          <img className={classes.image} src={image} alt={title} />
        </div>
        <CardContent className={classes.cardContent}>
          <Typography variant="caption" gutterBottom>
            {date}
          </Typography>
          <Link underline="hover">{title}</Link>
        </CardContent>
      </Card>
    </StyledGridItem>
  );
};

export default PostCard;
