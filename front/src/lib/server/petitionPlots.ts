import { AddDataPlot, IPlotsType, SaveDataPlot } from "@/interfaces/interfaces";
import { NEXT_PUBLIC_API_URL } from "./envs";
import axios from "axios";

const API_PUBLIC = NEXT_PUBLIC_API_URL;
export const fetchPlots = async (
  userId: string,
  token: string,
  savePlot: SaveDataPlot
): Promise<IPlotsType[]> => {
  try {
    const response = await axios.get(`${API_PUBLIC}/plots/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    savePlot(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching plots:", error);
    throw error;
  }
};
export const createPlot = async (
  plot: { surface: string; cereal: string; latitude: string; longitude: string},
  userId: string,
  token: string,
  savePlot: AddDataPlot
): Promise<IPlotsType | void> => {
  try {
    const response = await axios.post(
      `${API_PUBLIC}/plots/create/${userId}`,
      plot,
      
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = response.data;

    savePlot(data);

    if (data && data.id && data.cereal && data.surface) {
      return {
        id: data.id,
        cereal: data.cereal,
        surface: data.surface,
        labors: data.labors || [],
        supplies: data.supplies || [],
      };
    } else {
      console.error("Unexpected response format:", data);
    }
  } catch (error) {
    console.error("Error creating plot:", error);
  }
};

export const getPlotById = async (
  id: string,
  token: string
): Promise<SaveDataPlot | void> => {
  try {
    const response = await axios.get(`${API_PUBLIC}/plots/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching plots:", error);
    throw error;
  }
};
