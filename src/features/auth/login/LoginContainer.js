import { yupResolver } from "@hookform/resolvers/yup";
// form
import { useForm } from "react-hook-form";
// notistack
import { useSnackbar } from "notistack";
// others
import { LoginForm } from "./LoginForm";
import { useDispatch } from "../../../app/store";
import { loginSchema } from "../../../utils/validations/auth/loginSchema";
import { authApi } from "../../../app/services/auth/authApi";
import { transformParams } from "./helper";

// ----------------------------------------------------------------------
const defaultValues = {
  email: "",
  password: "",
  remember: true,
};
export default function LoginContainer() {
  // define hooks
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: yupResolver(loginSchema()),
    defaultValues,
    mode: "onSubmit",
  });

  // handle logic
  const onSubmit = async (data) => {
    try {
      const formData = transformParams(data);
      await dispatch(authApi.endpoints.login.initiate(formData)).unwrap();
      enqueueSnackbar("Đăng nhập thành công");
    } catch (error) {
      showLoginError(error);
    }
  };

  // get message of error
  const showLoginError = (error) => {
    enqueueSnackbar(error?.data?.errorMessage || "Đăng nhập thất bại!", {
      variant: "error",
    });
  };
  // render
  return <LoginForm onSubmit={onSubmit} methods={methods} />;
}
