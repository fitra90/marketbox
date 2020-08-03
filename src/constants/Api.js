import axios from 'axios';

const baseURL = 'http://192.168.43.19/marketbox-api';
// const baseURL = 'https://api.marketbox.id';

//thirdparty
const GEOLOCATION_API_KEY = 'e991d02b2494453a8a1fefee8d7f5d03';
const geolocationUrl = 'https://api.opencagedata.com/geocode/v1/';

export default api = axios.create({
  baseURL: baseURL,
});

export const geolocation = axios.create({
  baseURL: geolocationUrl,
});
