import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://iloeirzrdmjsvklc9-mock.stoplight-proxy.io/v4/financial-dashboard',
});

export default api;
