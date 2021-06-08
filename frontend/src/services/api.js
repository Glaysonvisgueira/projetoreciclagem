import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.94.32.236:3333',
})

export default api;
