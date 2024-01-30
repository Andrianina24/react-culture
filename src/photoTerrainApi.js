import axios from 'axios';

const API_BASE_URL = 'https://back-office-culture-production.up.railway.app/photo';

export const getAllPhotoTerrains = () => {
  return axios.get(API_BASE_URL);
};