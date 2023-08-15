import axios from 'axios';

const nazcaApi = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export default nazcaApi;
