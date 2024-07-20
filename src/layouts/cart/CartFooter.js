import { Button, Stack } from "@mui/material";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { PATH_APP } from "../../routes/paths";
import { fCurrencyVND } from "../../utils/formatNumber";
import { useSelector } from "react-redux";

const CartFooter = ({ onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const router = useNavigate();

  const total = useMemo(
    () =>
      cartItems.reduce((result, currProd) => {
        return result + currProd.price * currProd.quantity;
      }, 0),
    [cartItems]
  );

  const handleCheckoutNow = () => {
    router(PATH_APP.checkout);
    onClose();
  };

  const handleShopNow = () => {
    router(PATH_APP.products.index);
    onClose();
  };

  const isEmpty = !cartItems?.length;

  return (
    <Stack p={2.5}>
      {!isEmpty && (
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={handleCheckoutNow}
          sx={{
            borderRadius: 0
          }}
        >
          Thanh toán ngay ({fCurrencyVND(total)})
        </Button>
      )}
    </Stack>
  );
};

export default CartFooter;
