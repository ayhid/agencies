import Axios from 'axios';

const api = Axios.create({
  baseURL: process.env.REACT_APP_API_URL||'http://localhost:3001',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
