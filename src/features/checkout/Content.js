import { Divider, Grid, Stack, Typography, styled } from "@mui/material";
import React, { useMemo } from "react";
import ProductPreview from "./ProductPreview";
import ShippingInfo from "./ShippingInfo";
import BillPreview from "./BillPreview";
import Scrollbar from "../../components/Scrollbar";
import useResponsive from "../../hooks/useResponsive";
import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createOrderSchema from "../../utils/validations/order/createOrderSchema";
import CryptoJS from "crypto-js";
import querystring from "query-string";
import moment from "moment";
import {
  VNPAY_RETURN_URL,
  VNPAY_SECRET_KEY,
  VNPAY_TMN_CODE,
  VNPAY_VPN_URL,
} from "../../configs/app";
import { sortObject } from "../../utils/sortHelper";
import { FEE_SHIP, MAX_PRICE_TRANSACTION } from "../../utils/constants";
import { useSelector } from "react-redux";
// import { useSnackbar } from "notistack";
// import { fCurrencyVND } from "../../utils/formatNumber";
import EmptyContent from "../../components/EmptyContent";
import { Link } from "react-router-dom";
import { PATH_APP } from "../../routes/paths";
import { formatCurrentDateTime } from "./helpers";
import { selectCurrentUser } from "../../app/redux/auth/authSlice";

const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Content = () => {
  // const { enqueueSnackbar } = useSnackbar();
  const currUser = useSelector(selectCurrentUser);
  const isSmDown = useResponsive("down", "md");
  const cartItems = useSelector((state) => state.cart.items);

  const total = useMemo(
    () =>
      cartItems.reduce((result, currProd) => {
        return result + currProd.price * currProd.quantity;
      }, 0),
    [cartItems]
  );

  const methods = useForm({
    defaultValues: {
      userId: currUser?.id,
      firstName: currUser?.firstName || "",
      lastName: currUser?.lastName || "",
      phoneNumber: currUser?.phoneNumber || "",
      email: currUser?.email || "",
      address: currUser?.address || "",
    },
    resolver: yupResolver(createOrderSchema()),
    mode: "onSubmit",
  });

  const renderContent = () => {
    return (
      <Stack spacing={2}>
        <ProductPreview />
        <ShippingInfo />
      </Stack>
    );
  };

  const handlePayment = (orderInfo) => {
    let date = new Date();
    const orderId = moment(date).format("DDHHmmss");

    const vnpParams = {
      vnp_Version: "2.1.0",
      vnp_Command: "pay",
      vnp_TmnCode: VNPAY_TMN_CODE,
      vnp_Locale: "vn",
      vnp_CurrCode: "VND",
      vnp_TxnRef: orderId,
      vnp_OrderInfo: JSON.stringify(orderInfo),
      vnp_OrderType: "other",
      vnp_Amount: (total + FEE_SHIP) * 100, // Amount in VND
      vnp_ReturnUrl: VNPAY_RETURN_URL,
      vnp_IpAddr: "::1",
      vnp_CreateDate: formatCurrentDateTime(),
    };

    const sortedParams = sortObject(vnpParams);
    const signData = querystring.stringify(sortedParams, { encode: false });
    const hmac = CryptoJS.HmacSHA512(signData, VNPAY_SECRET_KEY);
    const signed = hmac.toString(CryptoJS.enc.Hex);
    sortedParams.vnp_SecureHash = signed;
    const paymentUrl = `${VNPAY_VPN_URL}?${querystring.stringify(sortedParams, {
      encode: false,
    })}`;

    window.location.href = paymentUrl;
  };

  // const handleSubmit = (data) => {
  //   if (total > MAX_PRICE_TRANSACTION)
  //     return enqueueSnackbar(
  //       `Bạn không thể giao dịch với hóa đơn trên ${fCurrencyVND(
  //         MAX_PRICE_TRANSACTION
  //       )}`,
  //       {
  //         variant: "error",
  //       }
  //     );
  //   handlePayment(data);
  // };

  const isEmptyCart = !cartItems?.length;

  return (
    <FormProvider
      methods={methods}
      onSubmit={methods.handleSubmit(handlePayment)}
    >
      <Grid container spacing={5}>
        {isEmptyCart && (
          <Grid item xs={12}>
            <EmptyContent
              title={"Giỏ hàng trống"}
              description={
                <Typography>
                  Click{" "}
                  <LinkStyled to={PATH_APP.products.index}>vào đây</LinkStyled>{" "}
                  để mua sắm ngay.
                </Typography>
              }
            />
          </Grid>
        )}
        {!isEmptyCart && (
          <>
            <Grid item xs={12} md={7} lg={8}>
              {isSmDown && renderContent()}
              {!isSmDown && (
                <Scrollbar
                  style={{
                    minHeight: `calc(100vh - 260px)`,
                    maxHeight: `calc(100vh - 260px)`,
                  }}
                >
                  {renderContent()}
                </Scrollbar>
              )}
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <BillPreview />
            </Grid>
          </>
        )}
      </Grid>
    </FormProvider>
  );
};

export default Content;
