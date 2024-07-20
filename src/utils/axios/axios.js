import axios from 'axios'
// config
import { HOST_API } from '../../configs/app';
// ----------------------------------------------------------------------
const axiosInstance = axios.create({
  baseURL: HOST_API,
  headers: {
    'Accept': 'application/json'
  }
});
export default axiosInstance;
