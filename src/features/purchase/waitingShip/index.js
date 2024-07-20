import { Button, Stack, Typography, CircularProgress } from "@mui/material";
import React, { useMemo, useState } from "react";
import {
  orderApi,
  useGetByStatusQuery,
} from "../../../app/services/order/orderApi";
import StateManager, { specifyState } from "../../../components/StateManager";
import EmptyResult from "../../../components/EmptyResult";
import ErrorAlert from "../../../components/ErrorAlert";
import GroupOrder from "../GroupOrder";
import useToggle from "../../../hooks/useToggle";
import ConfirmDialog from "../../../components/ConfirmDialog";
import { dispatch } from "../../../app/store";
import { enqueueSnackbar } from "notistack";
import { STATUS_ORDER } from "../../../utils/constants";

const WaitingShip = () => {
  const {
    toggle: isConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useToggle();
  const [cancelData, setCancelData] = useState(null);

  const bodyFormData = new FormData();
  bodyFormData.append("Status", STATUS_ORDER.processing);
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

  const handleCancel = async () => {
    try {
      const id = cancelData?.id;
      if (!id) return;

      const formData = new FormData();
      formData.append("Id", id);
      await dispatch(
        orderApi.endpoints.cancelOrder.initiate(formData)
      ).unwrap();
      enqueueSnackbar("Hủy đơn hàng thành công", { variant: "success" });
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Hủy đơn hàng thất bại!", { variant: "error" });
    } finally {
      handleCloseConfirm();
    }

    setCancelData(null);
  };

  const handleConfirmCancel = (data) => {
    onOpenConfirm();
    setCancelData(data);
  };

  const handleCloseConfirm = () => {
    onCloseConfirm();
    setCancelData(null);
  };

  return (
    <>
      <StateManager
        state={state}
        loadingState={<Stack width={1} alignItems='center'>
          <CircularProgress />
        </Stack>}
        emptyState={
          <EmptyResult />
        }
        errorState={<ErrorAlert />}
      >
        <Stack spacing={1.5}>
          {sortedItems?.map((order, idx) => (
            <GroupOrder key={idx} data={order} onCancel={handleConfirmCancel} />
          ))}
        </Stack>
      </StateManager>
      <ConfirmDialog
        open={isConfirm}
        onCancel={onCloseConfirm}
        title="Xác nhận"
        description={
          <Typography variant="body1" px={3}>
            Bạn có chắc chắn muốn hủy đơn hàng này không?
          </Typography>
        }
        titleProps={{
          sx: {
            p: 2,
            px: 3,
          },
        }}
        actions={
          <Stack direction="row" mt={2} spacing={1}>
            <Button
              variant="text"
              size="small"
              color="inherit"
              onClick={handleCloseConfirm}
            >
              Hủy
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="error"
              onClick={handleCancel}
            >
              Xác nhận
            </Button>
          </Stack>
        }
      />
    </>
  );
};

export default WaitingShip;
