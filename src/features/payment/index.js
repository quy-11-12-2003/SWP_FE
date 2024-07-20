import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CryptoJS from "crypto-js";
import queryString from "query-string";
import { PAYMENT_STATUS } from "./constants";
import CompleteCard from "./CompleteCard";
import ErrorCard from "./ErrorCard";
import { useSelector } from "react-redux";
import { FEE_SHIP, STATUS_ORDER, STATUS_PAYMENT } from "../../utils/constants";
import { dispatch } from "../../app/store";
import { orderApi } from "../../app/services/order/orderApi";
import { VNPAY_SECRET_KEY } from "../../configs/app";
import { sortObject } from "../../utils/sortHelper";
import { clearCart } from "../../app/redux/cart/cartSlice";
import useLocalStorage from "../../hooks/useLocalStorage";

const PaymentContainer = () => {
  const [paymentStatus, setPaymentStatus] = useState(PAYMENT_STATUS.idle);
  const [errorCode, setErrorCode] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [paymentedIds, updatePaymentedIds] = useLocalStorage(
    "paymentedIds",
    []
  );
  const isCreatedOrder = useRef(false);
  const cartItems = useSelector((state) => state.cart.items);

  const handleClearCart = () => dispatch(clearCart());

  const handlePaymentOrder = async (id) => {
    const formData = new FormData();
    formData.append("Id", id);
    formData.append("Status", STATUS_ORDER.processing);
    formData.append("StatusPayment", STATUS_PAYMENT.paid);
    await dispatch(
      orderApi.endpoints.updateStatusOrder.initiate(formData)
    ).unwrap();
  };

  const handleCreateOrder = async (data) => {
    const productItems =
      cartItems?.map((cartItem) => ({
        id: cartItem?.id,
        quantity: cartItem?.quantity,
      })) ?? [];
    try {
      const parsedData = {
        productItems: productItems,
        shipFees: FEE_SHIP,
        address: data?.address,
        phoneNumber: data?.phoneNumber,
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        userId: data?.userId,
      };
      const response = await dispatch(
        orderApi.endpoints.createOrder.initiate(parsedData)
      ).unwrap();
      console.log(response);
      const orderId = response?.order?.id;
      if (orderId) handlePaymentOrder(orderId);
      return true;
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  useEffect(() => {
    const execPayment = async () => {
      const params = new URLSearchParams(window.location.search);
      const paymentResult = {};
      params.forEach((value, key) => {
        paymentResult[key] = value;
      });
      const orderInfo = paymentResult["vnp_OrderInfo"]
        ? JSON.parse(paymentResult["vnp_OrderInfo"])
        : {};

      const secretKey = VNPAY_SECRET_KEY; // Replace with your actual secretKey

      // Remove the secure hash from the params for verification
      const secureHash = paymentResult["vnp_SecureHash"];
      delete paymentResult["vnp_SecureHash"];
      delete paymentResult["vnp_SecureHashType"];

      // Sort the parameters
      const sortedParams = sortObject(paymentResult);

      // Generate the secure hash using the returned data
      const signData = queryString.stringify(sortedParams, { encode: false });
      const hmac = CryptoJS.HmacSHA512(signData, secretKey);
      const signed = hmac.toString(CryptoJS.enc.Hex);

      if (paymentedIds?.includes(secureHash) || isCreatedOrder.current) {
        setPaymentStatus(PAYMENT_STATUS.failed);
        setErrorMsg("Mã đơn hàng đã từng thanh toán trước đó!");
        return;
      }
      // Verify the secure hash
      updatePaymentedIds(
        paymentedIds ? [...paymentedIds, secureHash] : [secureHash]
      );
      isCreatedOrder.current = true;
      if (secureHash === signed) {
        // Check for VNPAY response codes
        const responseCode = paymentResult["vnp_ResponseCode"];
        if (responseCode === "00") {
          const isCreatedOrder = await handleCreateOrder(orderInfo);
          if (isCreatedOrder) {
            setPaymentStatus(PAYMENT_STATUS.success);
            handleClearCart();
          } else setPaymentStatus(PAYMENT_STATUS.failed);
        } else {
          setPaymentStatus(PAYMENT_STATUS.failed);
          setErrorCode(responseCode);
        }
      } else {
        setPaymentStatus(PAYMENT_STATUS.wrongData);
      }
    };
    execPayment();
  }, []);

  const renderContent = () => {
    switch (paymentStatus) {
      case PAYMENT_STATUS.idle:
        return (
          <Stack alignItems="center" spacing={1.5}>
            <CircularProgress />
            <Typography>Đang xử lý...</Typography>
          </Stack>
        );
      case PAYMENT_STATUS.success:
        return <CompleteCard />;
      case PAYMENT_STATUS.wrongData:
        return (
          <ErrorCard
            title="Thông tin không hợp lệ"
            description="Hàm băm an toàn không hợp lệ. Dữ liệu thanh toán có thể bị giả mạo."
          />
        );
      case PAYMENT_STATUS.failed:
        return (
          <ErrorCard
            title="Thanh toán thất bại"
            description={
              errorMsg ||
              `Thanh toán không thành công với mã lỗi: ${errorCode}! Vui lòng thử lại sau.`
            }
          />
        );
      default:
        break;
    }
  };

  return (
    <Box textAlign="center" my={3}>
      <Typography variant="h4" py={1.5}>
        Thông tin thanh toán
      </Typography>
      {renderContent()}
    </Box>
  );
};

export default PaymentContainer;
