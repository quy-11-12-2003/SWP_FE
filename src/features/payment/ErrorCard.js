// i18n
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import ResultCard from "./ResultCard";
import { PATH_APP } from "../../routes/paths";
import Iconify from "../../components/Iconify";
// components
// ----------------------------------------------------------------------

export default function ErrorCard({ title, description }) {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate(PATH_APP.products.index);
  };

  return (
    <ResultCard
      isError
      cardTitle={"Lỗi xảy ra"}
      title={title}
      content={
        <Typography variant="body2" sx={{ fontWeight: 400, mt: 1 }}>
          {description}
        </Typography>
      }
      action={
        <Stack direction={"row"} sx={{ justifyContent: "flex-end", width: 1 }}>
          <Button
            sx={{ fontWeight: 500 }}
            variant="text"
            color="primary"
            startIcon={<Iconify icon={"material-symbols-light:home-outline"} />}
            onClick={() => gotoHome()}
          >
            Quay về trang chủ
          </Button>
        </Stack>
      }
    />
  );
}
