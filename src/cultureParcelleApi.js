import axios from "axios";

const API_BASE_URL = "http://localhost:8080/culture_parcelle";

export const getAllCultureParcelles = () => {
  return axios.get(API_BASE_URL);
};