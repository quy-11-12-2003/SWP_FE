import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Card } from "@mui/material";
// routes
// utils
import ChangePasswordForm from "./ChangePasswordForm";
//
import { CardTitle } from "../styles";
import changePasswordSchema from "../../../utils/validations/personal-setting/changePasswordSchema";
import { dispatch, useSelector } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";
import { selectCurrentUser } from "../../../app/redux/auth/authSlice";

// ----------------------------------------------------------------------

const defaultValues = {
  oldPassword: "",
  newPassword: "",
  newPasswordConfirm: "",
};
export default function ChangePassword() {
  const currUser = useSelector(selectCurrentUser);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(changePasswordSchema()),
    defaultValues,
    mode: "onSubmit",
  });

  const handleSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("Email", currUser?.email);
      formData.append("Password", data?.oldPassword);
      formData.append("NewPassword", data?.newPassword);

      await dispatch(
        authApi.endpoints.updatePassword.initiate(formData)
      ).unwrap();
      enqueueSnackbar("Cập nhật thành công", { variant: "success" });
      // navigate(PATH_AUTH.login, { replace: true });
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Cập nhật thất bại!", { variant: "error" });
    }
  };

  return (
    <Card sx={{ p: 2 }}>
      <CardTitle>{"Thay đổi mật khẩu"}</CardTitle>
      <ChangePasswordForm methods={methods} onSubmit={handleSubmit} />
    </Card>
  );
}
