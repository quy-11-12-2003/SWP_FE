import * as yup from "yup";
import { emailRegExp, phoneRegExp } from "../../constants";

export default function registerSchema() {
  return yup.object().shape({
    firstName: yup.string().required("Tên là bắt buộc!"),
    lastName: yup.string().required("Họ là bắt buộc!"),
    phone: yup
      .string()
      .required("Số điện thoại là bắt buộc!")
      .matches(phoneRegExp, {
        excludeEmptyString: true,
        message: "Số điện thoại không hợp lệ!",
      }),
    email: yup
      .string()
      .required("Email là bắt buộc!")
      .matches(emailRegExp, "Email không hợp lệ!"),
    address: yup.string().required("Địa chỉ là bắt buộc!"),
    password: yup
      .string()
      .min(8, "Mật khẩu cần chứa ít nhất 8 kí tự!")
      .required("Mật khẩu là bắt buộc!"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Mật khẩu phải khớp!")
      .required("Vui lòng xác nhận mật khẩu của bạn!"),
  });
}
