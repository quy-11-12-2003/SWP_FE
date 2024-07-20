import * as yup from "yup";

export default function changePasswordSchema() {
  return yup.object().shape({
    oldPassword: yup
      .string()
      .min(8, "Mật khẩu cần chứa ít nhất 8 kí tự!")
      .required("Mật khẩu cũ là bắt buộc!"),
    newPassword: yup
      .string()
      .min(8, "Mật khẩu cần chứa ít nhất 8 kí tự!")
      .required("Mật khẩu mới là bắt buộc!"),
    newPasswordConfirm: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Mật khẩu phải khớp!")
      .required("Vui lòng xác nhận mật khẩu của bạn!"),
  });
}
