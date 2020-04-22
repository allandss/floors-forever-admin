import axios from 'axios';

const api = axios.create({
  baseURL: 'https://floors-forever-api.herokuapp.com',
});

export default api;