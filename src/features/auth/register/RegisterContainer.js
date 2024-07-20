// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
// hooks
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { PATH_AUTH } from "../../../routes/paths";

import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";
import { RegisterForm } from "./RegisterForm";
import registerSchema from "../../../utils/validations/auth/registerSchema";
import { transformParams } from "./helper";

// ----------------------------------------------------------------------
const defaultValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  password: "",
  passwordConfirmation: "",
};

export default function RegisterContainer() {
  // hooks
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // method for validation
  const methods = useForm({
    resolver: yupResolver(registerSchema()),
    defaultValues,
    mode: "onSubmit",
  });

  // handle register
  async function register(data) {
    // send req to server and handle error
    const formData = transformParams(data);
    try {
      await dispatch(authApi.endpoints.register.initiate(formData), {
        track: false,
      }).unwrap();
      enqueueSnackbar("Đăng ký thành công");
      navigate(PATH_AUTH.login);
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error?.data?.errorMessage || "Đăng ký thất bại!", {
        variant: "error",
      });
    }
  }
  // handle submision
  const onSubmit = (data) => register(data);
  // generate view
  return <RegisterForm onSubmit={onSubmit} methods={methods} />;
}
