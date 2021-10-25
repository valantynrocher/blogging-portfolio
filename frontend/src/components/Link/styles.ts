import MuiLink from "@mui/material/Link";
import styled from "@mui/material/styles/styled";

export const StyledMuiLink = styled(MuiLink)(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
})) as typeof MuiLink;
