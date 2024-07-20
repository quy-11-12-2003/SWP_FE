import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBaseQuery from '../../utils/axios/axiosBaseQuery'
// config
import { HOST_API } from '../../configs/app';
// ----------------------------------------------------------------------
const UNKNOWN_ERROR = "UNKNOWN_ERROR";
const UNAUTHORIZED = "UNAUTHORIZED"
/**
 * config Api
 */
const apiService = createApi({
    reducerPath: 'apiService',
    tagTypes: [UNKNOWN_ERROR, UNAUTHORIZED],
    baseQuery: axiosBaseQuery({
        baseUrl: HOST_API
    }),
    endpoints: () => ({})
})
/**
 * Export default
 */
export default apiService