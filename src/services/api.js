import axios from 'axios';

const api = axios.create({
  baseURL: 'https://floors-forever-api.herokuapp.com',
  //baseURL: 'http://localhost:3333',
});

export default api;