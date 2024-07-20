import * as yup from "yup";
import { emailRegExp } from "../../constants";

export const loginSchema = () => {
  return yup.object().shape({
    email: yup
      .string()
      .required("Email là bắt buộc!")
      .matches(emailRegExp, "Email không hợp lệ!"),
    password: yup
      .string()
      .min(8, "Mật khẩu cần chứa ít nhất 8 kí tự!")
      .required("Mật khẩu là bắt buộc!"),
  });
};
