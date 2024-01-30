import axios from "axios";

const API_BASE_URL = "https://back-office-culture-production.up.railway.app/cultures";

export const getAllCultures = () => {
  return axios.get(API_BASE_URL);
};

export const addCulture = (culture) => {
  return axios.post(API_BASE_URL, culture);
};

export const updatePrix = (id_Culture, newPrix) => {
  return axios.put(
    `${API_BASE_URL}/${id_Culture}/updatePrix?newPrix=${newPrix}`
  );
};
