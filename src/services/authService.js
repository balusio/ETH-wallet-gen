import axios from 'axios';

const authConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
const params = {
  grant_type: 'client_credentials',
  client_id:'nodejs-login-service',
  client_secret: '11d4f76c-a262-4678-9613-11508f4fdf7e'
};

const data = Object.entries(params)
  .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
  .join('&');

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  data,
  url: 'http://localhost:8080/auth/realms/choozie/protocol/openid-connect/token',
};

const authService = () => {
  return axios(options);
}

export {authService, authConfig }
