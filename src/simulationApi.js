import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/simulations';

export const getAllSimulations = () => {
  return axios.get(API_BASE_URL);
};
