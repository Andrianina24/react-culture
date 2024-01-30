import axios from 'axios';

import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

const API_BASE_URL = 'https://back-office-culture-production.up.railway.app/utilisateurs';

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

export const login = async (email, mdp) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login?email=${email}&mdp=${mdp}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
