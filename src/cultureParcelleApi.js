import axios from "axios";

const API_BASE_URL = "https://back-office-culture-production.up.railway.app/culture_parcelle";

export const getAllCultureParcelles = () => {
  return axios.get(API_BASE_URL);
};
