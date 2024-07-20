import { useEffect } from "react";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//
import UpdateAccountForm from "./UpdateAccountForm";
import { useAlertReponse } from "../custom/useAlertResponse";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../app/redux/auth/authSlice";
import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";
import updateProfileSchema from "../../../utils/validations/personal-setting/updateProfileSchema";

// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const { alertUpdateResponse } = useAlertReponse();
  // const { auth: { user } } = useAuth();
  const user = useSelector(selectCurrentUser);

  const defaultValues = {
    avatar: user?.avatar || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phoneNumber || "",
    address: user?.address || "",
  };

  const methods = useForm({
    resolver: yupResolver(updateProfileSchema()),
    defaultValues,
    mode: "onSubmit",
  });
  const { reset } = methods;

  useEffect(() => {
    if (user) reset(defaultValues);
  }, [user]);

  async function updateProfile(data) {
    try {
      const formData = new FormData();
      formData.append("Email", data?.email);
      formData.append("FirstName", data?.firstName);
      formData.append("LastName", data?.lastName);
      formData.append("PhoneNumber", data?.phone);
      formData.append("Address", data?.address);

      await dispatch(
        authApi.endpoints.updateProfile.initiate(formData)
      ).unwrap();
      alertUpdateResponse(true);
    } catch (error) {
      console.log(error);
      alertUpdateResponse(false);
    }
  }

  const handleSubmit = async (data) => {
    updateProfile(data);
  };

  return <UpdateAccountForm methods={methods} onSubmit={handleSubmit} />;
}
