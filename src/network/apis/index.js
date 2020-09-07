import axios from 'axios';
import { requestHandler, successHandler, errorHandler } from '../interceptors';

export default axios;

export const initializeApi = ({ baseURL }) => {
  axios.defaults.baseURL = baseURL;
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  // Handle request process
  axios.interceptors.request.use(request => requestHandler(request));
  // Handle response process
  axios.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
  );

  return axios;
};
