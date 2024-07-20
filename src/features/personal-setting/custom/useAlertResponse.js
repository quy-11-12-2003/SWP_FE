import { useSnackbar } from "notistack";

export const useAlertReponse = () => {
  const { enqueueSnackbar } = useSnackbar();

  function alertUpdateResponse(isSuccess) {
    if (isSuccess) return enqueueSnackbar("Cập nhật thành công");
    return enqueueSnackbar("Cập nhật thất bại!", { variant: "error" });
  }

  return {
    alertUpdateResponse,
  };
};
