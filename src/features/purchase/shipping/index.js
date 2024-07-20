import { Stack, CircularProgress } from "@mui/material";
import React, { useMemo } from "react";
import StateManager, { specifyState } from "../../../components/StateManager";
import { useGetByStatusQuery } from "../../../app/services/order/orderApi";
import EmptyResult from "../../../components/EmptyResult";
import ErrorAlert from "../../../components/ErrorAlert";
import GroupOrder from "../GroupOrder";
import { STATUS_ORDER } from "../../../utils/constants";

const Shipping = () => {
  const bodyFormData = new FormData();
  bodyFormData.append("Status", STATUS_ORDER.shipping);
  const responseOrders = useGetByStatusQuery(bodyFormData, {
    refetchOnMountOrArgChange: true,
  });
  const { data } = responseOrders;
  const state = specifyState(responseOrders);

  const sortedItems = useMemo(() => {
    if (!data) return [];
    return structuredClone(data)?.sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    );
  }, [data]);

  return (
    <StateManager
      state={state}
      loadingState={<Stack width={1} alignItems='center'>
        <CircularProgress />
      </Stack>}
      emptyState={<EmptyResult sx={{ backgroundColor: "background.paper" }} />}
      errorState={<ErrorAlert sx={{ backgroundColor: "background.paper" }} />}
    >
      <Stack spacing={1.5}>
        {sortedItems?.map((order, idx) => (
          <GroupOrder key={idx} data={order} />
        ))}
      </Stack>
    </StateManager>
  );
};

export default Shipping;
