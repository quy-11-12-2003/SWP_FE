import { Divider, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { fCurrencyVND } from "../../utils/formatNumber";
import { useSelector } from "react-redux";
import { FEE_SHIP } from "../../utils/constants";

const ProductTotal = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const total = useMemo(
    () =>
      cartItems.reduce((result, currProd) => {
        return result + currProd.price * currProd.quantity;
      }, 0),
    [cartItems]
  );

  return (
    <Stack>
      <Stack
        py={3}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize="14px" fontWeight={400} color="#060709">
          Tổng cộng
        </Typography>
        <Typography
          fontSize="20px"
          fontWeight={500}
          color="#EB2606"
          lineHeight="30px"
        >
          {fCurrencyVND(total)}
        </Typography>
      </Stack>
      <Divider />
      <Stack pt={3} pb={2} spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          fontSize="14px"
          fontWeight={400}
        >
          <Typography color="#9D9EA2">Tổng cộng</Typography>
          <Typography color="#060709" lineHeight="30px">
            {fCurrencyVND(total)}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          fontSize="14px"
          fontWeight={400}
        >
          <Typography color="#9D9EA2">Phí giao hàng</Typography>
          <Typography color="#060709" lineHeight="30px">
            {fCurrencyVND(FEE_SHIP)}
          </Typography>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize="14px" fontWeight={400} color="#060709">
          Tổng thanh toán
        </Typography>
        <Typography
          fontSize="20px"
          fontWeight={500}
          color="#EB2606"
          lineHeight="30px"
        >
          {fCurrencyVND(total + FEE_SHIP)}
        </Typography>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default ProductTotal;
