import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "./envs";

const API_PUBLIC = NEXT_PUBLIC_API_URL;

export const fetchMembershipMetrics = async () => {
  try {
    const response = await axios.get(`${API_PUBLIC}/metrics/membership`);
    return response.data;
  } catch (error) {
    console.error("Error fetching membership metrics:", error);
    throw error;
  }
};
