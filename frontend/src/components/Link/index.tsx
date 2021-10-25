import React from "react";
import { LinkProps } from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";
import { StyledMuiLink } from "./styles";

const Link = React.forwardRef<HTMLAnchorElement, LinkProps & { to?: string }>(
  (props, ref) => {
    const { to } = props;
    return to ? (
      <StyledMuiLink
        ref={ref as any}
        {...props}
        component={GatsbyLink}
        to={to}
      />
    ) : (
      <StyledMuiLink ref={ref} {...props} />
    );
  }
);

export default Link;
