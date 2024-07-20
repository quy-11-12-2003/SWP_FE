// @mui
import { Stack } from "@mui/material";
// components
import { FormProvider, RHFTextField } from "../../../components/hook-form";
import RHFLoadingButton from "../../../components/hook-form/RHFLoadingButton";
import {
  withPasswordField,
  FormInputLabel,
  withDescHelperText,
} from "../../../components/custom-input";

// ----------------------------------------------------------------------
const DescTextField = withDescHelperText(RHFTextField, {
  color: "text.disabled",
  mt: 0.5,
  ml: 0,
});
const PasswordTextField = withPasswordField(DescTextField);

export function RegisterForm({ onSubmit, methods }) {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormInputLabel
          label="Tên của bạn"
          input={
            <DescTextField
              name="firstName"
              size="small"
              placeholder="Ví dụ: Trinh"
              descHelpText="＊Dùng để hiển thị trên hệ thống"
            />
          }
          isRequired
        />
        <FormInputLabel
          label="Họ của bạn"
          input={
            <DescTextField
              name="lastName"
              size="small"
              placeholder="Ví dụ: Nguyễn"
            />
          }
          isRequired
        />
        <FormInputLabel
          label="Địa chỉ email"
          input={
            <RHFTextField
              name="email"
              size="small"
              placeholder="Ví dụ: trinh-doan@gmail.com"
            />
          }
          isRequired
        />
        <FormInputLabel
          label="Số điện thoại"
          input={<RHFTextField
            name="phone"
            size="small"
            placeholder="Ví dụ: 0905278195"
          />}
          isRequired
        />
        <FormInputLabel
          label="Địa chỉ"
          input={
            <RHFTextField
              name="address"
              size="small"
              placeholder="Ví dụ: Bình Trị Đông A, Bình Tân, HCM"
            />
          }
          isRequired
        />
        <FormInputLabel
          label="Mật khẩu"
          input={
            <PasswordTextField
              name="password"
              size="small"
              descHelpText="＊Vui lòng nhập ít nhất 8 ký tự"
            />
          }
          isRequired
        />
        <FormInputLabel
          label="Xác nhận mật khẩu"
          input={
            <PasswordTextField
              name="passwordConfirmation"
              size="small"
              descHelpText="＊Vui lòng nhập lại cùng một mật khẩu để xác nhận"
            />
          }
          isRequired
        />
      </Stack>
      <RHFLoadingButton
        fullWidth
        variant="contained"
        sx={{ mt: 4 }}
        loading={isSubmitting}
        loadingIndicator={"Đang trong quá trình đăng ký..."}
        content="Đăng ký"
      />
    </FormProvider>
  );
}
