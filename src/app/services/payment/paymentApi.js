import apiService from "../apiService";

export const paymentApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        createVnpayPayment: builder.mutation({
            query: (data) => ({
                url: "/Payment/CreateVnPayPayment",
                method: "POST",
                data,
            }),
        }),
        handleVnpayReturn: builder.mutation({
            query: (data) => ({
                url: "/Payment/VnpayReturn",
                method: "POST",
                data,
            }),
        }),
    }),
});

export const { useCreateVnpayPaymentMutation } = paymentApi;
