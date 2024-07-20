import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import PaymentMethod from "./PaymentMethod";
import { fCurrencyVND } from "../../utils/formatNumber";
import { useSelector } from "react-redux";
import { FEE_SHIP } from "../../utils/constants";

const BillPreview = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const total = useMemo(
    () =>
      cartItems.reduce((result, currProd) => {
        return result + currProd.price * currProd.quantity;
      }, 0),
    [cartItems]
  );


  return (
    <Box
      sx={{
        borderRadius: 2,
        p: 3,
        border: `1px solid #F4F4F4`,
      }}
    >
      <Stack spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          fontSize="14px"
          fontWeight={400}
        >
          <Typography color="#9D9EA2">Tổng</Typography>
          <Typography color="#060709" lineHeight="21px">
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
          <Typography color="#9D9EA2">Phí ship</Typography>
          <Typography color="#060709" lineHeight="21px">
            {fCurrencyVND(FEE_SHIP)}
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ my: 2.5 }} />
      <Stack spacing={2} mb={2.5}>
        <Typography fontSize="12px" fontWeight={300} color="#717378">
          Các phương thức thanh toán
        </Typography>
        <PaymentMethod />
      </Stack>
      <Button type="submit"
        size={"large"}
        variant="contained"
        fullWidth
        sx={{ borderRadius: 0 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          fontSize="16px"
          fontWeight={500}
          color="#ffff"
          spacing={2}
        >
          <Typography>Đặt Hàng</Typography>
          <Box sx={{ width: "1px", height: "12px", bgcolor: "#ffff" }} />
          <Typography>{fCurrencyVND(total + FEE_SHIP)}</Typography>
        </Stack>
      </Button>
    </Box>
  );
};

export default BillPreview;
