import axiosInstance from "./axios";

const axiosBaseQuery =
  ({ baseUrl }) =>
  async ({ url, method, data, params }, { getState }) => {
    try {
      const token = getState().auth.token;
      const result = await axiosInstance({
        url,
        method,
        baseURL: baseUrl,
        data,
        params,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return {
        data: result.data,
      };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
export default axiosBaseQuery;
