import { IconButton, styled } from "@mui/material";

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
}));
