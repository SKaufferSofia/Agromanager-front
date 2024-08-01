import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "./envs";
import { Supply } from "@/interfaces/interfaces";

const API_PUBLIC = NEXT_PUBLIC_API_URL;
import { saveStock, updateStock } from "@/redux/reducer";
export const fetchSupplies = async (
  userId: string,
  token: string,
  setStock: (supply: Supply[]) => void
) => {
  try {
    const response = await axios.get(`${API_PUBLIC}/supplies/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setStock(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching plots:", error);
  }
};

export const fetchSuppliesCategories = async () => {
  try {
    const response = await axios.get(`${API_PUBLIC}/categories`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSuppliesMeasurements = async () => {
  try {
    const response = await axios.get(`${API_PUBLIC}/measurments`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createSupply = async (
  userId: string,
  supply: {
    id?: string;
    name: string;
    provider: string;
    stock: number;
    price: number;
    category: string;
    measurement: string;
    imgUrl: string;
  },

  token: string,
  addStock: (supply: Supply) => void
) => {
  try {
    const response = await axios.post(
      `${API_PUBLIC}/supplies/create/${userId}`,
      supply,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    addStock(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadImageSupply = async (
  file: File | string,
  supplyId: string
) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(
      `${API_PUBLIC}/files/uploadimage/${supplyId}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateSupply = async (
  userId: string,
  supply: Supply,
  token: string
) => {
  try {
    const response = await axios.put(
      `${API_PUBLIC}/supplies/${userId}`,
      supply,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
