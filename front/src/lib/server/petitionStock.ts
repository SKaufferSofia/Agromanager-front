import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "./envs";

const API_PUBLIC = NEXT_PUBLIC_API_URL;

export const fetchStock = async (id: string) => {
  try {
    const response = await axios.get(`${API_PUBLIC}/supplies/${id}`);
    if (response.data.length === 0) {
      {
        throw new Error("No hay plots para este usuario");
      }
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching plots:", error);
  }
};
