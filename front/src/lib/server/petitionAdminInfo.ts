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

export const editUserById = async (
  userToEditId: string,
  userData: {
    name: string;
    surname: string;
    phone: string | undefined;
    placeName: string;
    email: string;
  },
  token: string
) => {
  try {
    const response = await axios.put(
      `${API_PUBLIC}/users/${userToEditId}`,
      userData, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("Error in editUserById:", error);
    throw error;  
  }
};
export const deleteUserById = async (
  userToDeleteId: string,
  token: string
) => {
  try {
    const response = await axios.delete(
      `${API_PUBLIC}/users/${userToDeleteId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("Error in deleteUserById:", error);
    throw error;
  }
};