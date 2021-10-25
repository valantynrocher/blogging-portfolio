import React from "react";
import styled from "@mui/material/styles/styled";
import Grid from "@mui/material/Grid";
import PostCard from "../PostCard";

interface PostsGridProps {}

const PREFIX = "PostsHero";

export const classes = {
  //   image: `${PREFIX}-image`,
};

export const StyledGrid = styled(Grid)(({ theme }) => ({
  //   marginTop: theme.spacing(3),
  //   [`& .${classes.image}`]: {},
}));

const PostsGrid = (props: PostsGridProps) => {
  return (
    <StyledGrid container rowSpacing={1} columnSpacing={{ xs: 3 }}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </StyledGrid>
  );
};

export default PostsGrid;
