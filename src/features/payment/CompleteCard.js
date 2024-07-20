// i18n
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
// components
import ResultCard from "./ResultCard";
import { PATH_APP } from "../../routes/paths";
import Iconify from "../../components/Iconify";
// ----------------------------------------------------------------------

export default function CompleteCard() {
  const navigate = useNavigate();

  const gotoShopping = () => {
    navigate(PATH_APP.products.index);
  };

  const gotoViewOrders = () => {
    navigate(PATH_APP.purchase.index);
  };

  return (
    <ResultCard
      cardTitle={"Tạo đơn hàng thành công"}
      title={"Đã tạo thành công!"}
      content={
        <Typography variant="body2" sx={{ fontWeight: 400, mt: 1 }}>
          Đơn hàng đã được tạo thành công
        </Typography>
      }
      action={
        <Stack
          direction={"row"}
          spacing={1.5}
          sx={{ justifyContent: "space-between", width: 1 }}
        >
          <Button
            sx={{ fontWeight: 500 }}
            variant="text"
            color="inherit"
            startIcon={<Iconify icon={"mingcute:bill-line"} />}
            onClick={() => gotoViewOrders()}
          >
            Xem đơn mua
          </Button>
          <Button
            sx={{ fontWeight: 500 }}
            variant="text"
            color="primary"
            startIcon={<Iconify icon={"icon-park-outline:shopping"} />}
            onClick={() => gotoShopping()}
          >
            Tiếp tục mua sắm
          </Button>
        </Stack>
      }
    />
  );
}
