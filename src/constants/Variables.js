module.exports = {
  SERVER_URL: 'http://192.168.43.19/marketbox-api/',
  ASSETS_URL: 'http://192.168.43.19/marketbox-api/assets',
  AGENT_URL: 'http://192.168.43.19/marketbox-api/assets/agents/',

  //third party
  GEOLOCATION_API_KEY: 'e991d02b2494453a8a1fefee8d7f5d03',
  GEOLOCATION_PROVIDER:
    'https://api.opencagedata.com/geocode/v1/json?key=' +
    this.GEOLOCATION_API_KEY +
    '&q=',
};
