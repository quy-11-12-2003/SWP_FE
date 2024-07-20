import { Chip } from "@mui/material";
import { STATUS_ORDER, STATUS_PAYMENT } from "../../utils/constants";

export const StatusFactory = ({ status }) => {
  switch (status) {
    case STATUS_ORDER.completed:
      return (
        <Chip
          variant="outlined"
          size="small"
          color="success"
          label="Hoàn thành"
          sx={{
            borderRadius: 0
          }}
        />
      );
    case STATUS_ORDER.canceled:
      return (
        <Chip variant="outlined" size="small" color="error" label="Đã hủy"
          sx={{
            borderRadius: 0
          }} />
      );
    case STATUS_ORDER.processing:
      return (
        <Chip
          variant="outlined"
          size="small"
          color="warning"
          label="Chờ xử lý"
          sx={{
            borderRadius: 0
          }}
        />
      );

    case STATUS_ORDER.shipping:
      return (
        <Chip
          variant="outlined"
          size="small"
          color="info"
          label="Đang vận chuyển"
          sx={{
            borderRadius: 0
          }}
        />
      );
    default:
      break;
  }
};

export const StatusPaymentFactory = ({ status }) => {
  switch (status) {
    case STATUS_PAYMENT.waitingRefund:
      return (
        <Chip
          variant="outlined"
          size="small"
          color="secondary"
          label="Chờ hoàn trả"
          sx={{
            borderRadius: 0
          }}
        />
      );
    case STATUS_PAYMENT.refunded:
      return (
        <Chip
          variant="outlined"
          size="small"
          color="primary"
          label="Đã hoàn trả"
          sx={{
            borderRadius: 0
          }}
        />
      );
    default:
      break;
  }
};