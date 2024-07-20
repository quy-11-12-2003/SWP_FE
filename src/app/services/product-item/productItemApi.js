import apiService from "../apiService";

export const productItemApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    filterProducts: builder.query({
      query: (formData) => ({
        url: "/ProductItem/GetProductItems",
        method: "POST",
        data: formData,
      }),
      transformResponse: (response) => response?.data,
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/ProductItem/GetById`,
        method: "GET",
        params: { id },
      }),
    }),
  }),
});

export const { useFilterProductsQuery, useGetProductByIdQuery } =
  productItemApi;
