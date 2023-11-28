import axios from 'axios';

const BASE_URL_API = 'https://localhost:44307';

const http = axios.create({
  baseURL: BASE_URL_API,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
