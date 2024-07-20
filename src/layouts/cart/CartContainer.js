import { Box, Drawer } from "@mui/material";
import React from "react";
import CartHeader from "./CartHeader";
import CartContent from "./CartContent";
import CartFooter from "./CartFooter";

const CartContainer = ({ open, onClose }) => {
  return (
    <Drawer open={open} transitionDuration={0} anchor="right" onClose={onClose}>
      <Box sx={{ width: 380, overflow: "hidden" }} role="presentation">
        <CartHeader />
        <CartContent />
        <CartFooter onClose={onClose} />
      </Box>
    </Drawer>
  );
};

export default CartContainer;
