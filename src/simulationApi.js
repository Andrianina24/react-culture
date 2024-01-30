import axios from 'axios';

const API_BASE_URL = 'https://back-office-culture-production.up.railway.app/simulations';

export const getAllSimulations = () => {
  return axios.get(API_BASE_URL);
};
