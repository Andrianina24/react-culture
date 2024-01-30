import axios from 'axios';

const API_BASE_URL = 'https://back-office-culture-production.up.railway.app/terrains';

export const getAllTerrains = () => {
  return axios.get(API_BASE_URL);
};

export const findTerrainNonValide = () => {
  return axios.get(`${API_BASE_URL}/nonValide`);
};

export const findTerrainValide = () => {
  return axios.get(`${API_BASE_URL}/valide`);
};

export const validerTerrain = (id_Terrain) => {
  return axios.post(`${API_BASE_URL}/valider/${id_Terrain}`);
};

export const refuserTerrain = (id_Terrain) => {
  return axios.delete(`${API_BASE_URL}/${id_Terrain}/refuser`);
};
