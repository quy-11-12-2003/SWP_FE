import { Divider, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { HEADER } from "./constants";
import { useSelector } from "react-redux";

const CartHeader = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const amountItems = useMemo(() => cartItems?.length || 0, [cartItems]);
  return (
    <Stack>
      <Stack
        mx={3}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height={HEADER}
      >
        <Typography fontSize="1.25rem" fontWeight={400} >
          Giỏ Hàng
        </Typography>
        {!!amountItems && (
          <Typography fontSize="1.125rem" fontWeight={300} >
            ({amountItems})
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default CartHeader;
