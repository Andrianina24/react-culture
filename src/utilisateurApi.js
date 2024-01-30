import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/utilisateurs';

export const getAllUtilisateurs = () => {
  return axios.get(`${API_BASE_URL}`);
};

export const getUtilisateurById = (id) => {
  return axios.get(`${API_BASE_URL}/${id}`);
};

export const saveUtilisateur = (utilisateur) => {
  return axios.post(`${API_BASE_URL}`, utilisateur);
};

export const deleteUtilisateur = (id) => {
  return axios.delete(`${API_BASE_URL}/${id}`);
};

export const login = (email, mdp) => {
  return axios.post(`${API_BASE_URL}/login?email=${email}&mdp=${mdp}`);
};
