import apiService from "../apiService";

export const milkBrandApi = apiService
    .injectEndpoints({
        endpoints: (builder) => ({
            getAllMilkBrand: builder.query({
                query: () => ({
                    url: "/MilkBrand/GetAllMilkBrand",
                    method: "GET",
                }),
                transformResponse: (response) => response?.data,
            }),
        }),
    });

export const {
    useGetAllMilkBrandQuery,
} = milkBrandApi;
