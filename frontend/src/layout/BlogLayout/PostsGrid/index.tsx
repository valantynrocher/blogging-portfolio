import Grid from "@mui/material/Grid";
import styled from "@mui/material/styles/styled";
import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
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
      <PostCard
        image="/images/image1.jpg"
        Icon={SiYourtraveldottv}
        title="Titre cliquable"
        date="Date"
      />
      <PostCard
        image="/images/image1.jpg"
        Icon={SiYourtraveldottv}
        title="Titre cliquable"
        date="Date"
      />
      <PostCard
        image="/images/image1.jpg"
        Icon={SiYourtraveldottv}
        title="Titre cliquable"
        date="Date"
      />
      <PostCard
        image="/images/image1.jpg"
        Icon={SiYourtraveldottv}
        title="Titre cliquable"
        date="Date"
      />
      <PostCard
        image="/images/image1.jpg"
        Icon={SiYourtraveldottv}
        title="Titre cliquable"
        date="Date"
      />
      <PostCard
        image="/images/image1.jpg"
        Icon={SiYourtraveldottv}
        title="Titre cliquable"
        date="Date"
      />
    </StyledGrid>
  );
};

export default PostsGrid;
