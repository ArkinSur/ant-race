import axios from 'axios';

const baseUrl = 'https://sg-ants-test.herokuapp.com/ants';

export const API = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
});

export const fetchAnts = async () => {
  const response = await API.get('/');
  return response;
};
