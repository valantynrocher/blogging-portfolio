import React from "react";
import Seo from "../components/Seo";
import PostsGrid from "../layout/BlogLayout/PostsGrid";
import PostsHero from "../layout/BlogLayout/PostsHero";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Seo title="" />
      <PostsHero />
      <PostsGrid />
    </React.Fragment>
  );
};

export default IndexPage;
