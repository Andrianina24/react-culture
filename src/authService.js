import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const login = async (credentials) => {
  try {
    // Log request details
    console.log("Sending login request...");
    console.log("Request URL:", `${API_BASE_URL}/utilisateurs/login`);
    console.log("Request Payload:", credentials);

    const response = await axios.post(
      `${API_BASE_URL}/utilisateurs/login`,
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Log response details
    console.log("Response:", response.data);

    return response.data;
  } catch (error) {
    // Log error details
    console.error("Request failed:", error);
    throw error;
  }
};
