import { Stack, Alert, Divider } from "@mui/material";
//
import { FormProvider } from "../../../components/hook-form";
import InputPassword from "../custom/InputPassword";
import { RHFLoadingButtonStyled } from "../styles";

// ----------------------------------------------------------------------

export default function ChangePasswordForm({ methods, onSubmit }) {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {!!errors.afterSubmit && (
        <Alert severity="error">{errors.afterSubmit.message}</Alert>
      )}
      <Stack spacing={2.5}>
        <InputPassword name="oldPassword" description={"Mật khẩu hiện tại"} />
        <Divider sx={{ borderStyle: "dashed" }} />
        <InputPassword name="newPassword" description={"Mật khẩu mới"} />
        <InputPassword
          name="newPasswordConfirm"
          description={"Xác nhận mật khẩu mới"}
        />
      </Stack>
      <RHFLoadingButtonStyled
        sx={{ float: "left" }}
        loading={isSubmitting}
        content={"Lưu thay đổi"}
      />
    </FormProvider>
  );
}
