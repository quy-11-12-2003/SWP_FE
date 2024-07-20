import { jwtDecode } from "jwt-decode";
import apiService from "../apiService";
import { setToken, setUser, signIn } from "../../redux/auth/authSlice";

export const authApi = apiService.injectEndpoints({
  enhanceEndpoints: { addTagTypes: ["UNAUTHORIZED", "UNKNOWN_ERROR"] },
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/Account/Login",
        method: "POST",
        data,
      }),
      async onQueryStarted(formData, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = data?.token ?? "";
          const decoded = jwtDecode(token);
          dispatch(setToken(token));
          dispatch(
            setUser({
              id: decoded?.sub,
              firstName: decoded?.FirstName,
              lastName: decoded?.LastName,
              address: decoded?.Address,
              phoneNumber: decoded?.PhoneNumber,
              email: decoded?.email,
            })
          );
          dispatch(signIn(token));
        } catch (err) {
          console.error(err);
        }
      },
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: "/logout",
        method: "POST",
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        await queryFulfilled;
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/Account/Register",
        method: "POST",
        data,
      }),
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/Account/UpdateProfile",
        method: "POST",
        data,
      }),
      async onQueryStarted(formData, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          const email = formData.get("Email");
          const firstName = formData.get("FirstName");
          const lastName = formData.get("LastName");
          const phoneNumber = formData.get("PhoneNumber");
          const address = formData.get("Address");

          dispatch(
            setUser({
              firstName,
              lastName,
              address,
              phoneNumber,
              email,
            })
          );
        } catch (err) {
          console.error(err);
        }
      },
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: "/Account/UpdatePassword",
        method: "POST",
        data,
      }),
    }),
  }),
});

// export hooks
export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  authApi;
