import axios from 'axios';

export default axios;

export const initializeApi = ({ baseURL }) => {
  axios.defaults.baseURL = baseURL;
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  return axios;
};
