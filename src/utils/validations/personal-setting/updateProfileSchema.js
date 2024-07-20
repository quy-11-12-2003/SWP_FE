import * as yup from "yup";
import { phoneRegExp } from "../../constants";

export default function updateProfileSchema() {
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
    address: yup.string().required("Địa chỉ là bắt buộc!"),
  });
}
