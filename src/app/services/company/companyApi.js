import apiService from "../apiService";

export const companyApi = apiService
    .injectEndpoints({
        endpoints: (builder) => ({
            getProductsbyCompany: builder.query({
                query: (companyId) => ({
                    url: "/Company/getproductsbycompany",
                    method: "POST",
                    data: { id: companyId },
                }),
                transformResponse: response => response?.data
            }),
        }),
    });

export const { useGetProductsbyCompanyQuery, } = companyApi;
