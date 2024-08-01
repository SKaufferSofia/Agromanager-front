import { NEXT_PUBLIC_API_URL } from "./envs";
import axios from "axios";

const API_PUBLIC = NEXT_PUBLIC_API_URL;
export const fetchAllUsers = async (
    token: string,
)=> {
  try {
    const response = await axios.get(`${API_PUBLIC}/users/getall`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching plots:", error);
    throw error;
  }
};

