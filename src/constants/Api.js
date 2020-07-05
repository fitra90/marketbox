import axios from 'axios';

const baseURL = 'http://192.168.43.19/marketbox-api';
// const baseURL = 'https://api.marketbox.id';

export default api = axios.create({
  baseURL: baseURL,
});
