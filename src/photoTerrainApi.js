import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/photo';

export const getAllPhotoTerrains = () => {
  return axios.get(API_BASE_URL);
};