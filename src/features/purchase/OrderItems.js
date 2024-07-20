import { CircularProgress, Divider, Stack } from "@mui/material";
import React from "react";
import { useGetOrderByIdQuery } from "../../app/services/order/orderApi";
import StateManager, { specifyState } from "../../components/StateManager";
import OrderItem from "./OrderItem";
import ErrorAlert from "../../components/ErrorAlert";

const OrderItems = ({ id, isOpen }) => {
  const responseOrderItems = useGetOrderByIdQuery(id, { skip: !id || !isOpen });
  const { data } = responseOrderItems;
  const state = specifyState(responseOrderItems);

  return (
    <Stack
      sx={{
        border: theme => `1px solid ${theme.palette.divider}`,
        overflow: "hidden",
      }}
    >
      <StateManager
        state={state}
        loadingState={<Stack width={1} justifyContent='center' alignItems='center'>
          <CircularProgress />
        </Stack>}
        errorState={<ErrorAlert />}
      >
        <Stack divider={<Divider />}>
          {data?.orderDetails?.map((orderItem) => (
            <OrderItem key={orderItem?.id} data={orderItem} />
          ))}
        </Stack>
      </StateManager>
    </Stack>
  );
};

export default OrderItems;
