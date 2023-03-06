import axios from 'axios';
import { type Response } from '../pages/MainPage/types';

const baseUrl = 'https://sg-ants-test.herokuapp.com/ants';

export const API = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
});

export const fetchAnts = async () => {
  const response = await API.get<Response>('/');
  return response;
};
