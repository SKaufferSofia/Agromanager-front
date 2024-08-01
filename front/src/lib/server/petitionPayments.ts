import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "./envs";

const API_PUBLIC = NEXT_PUBLIC_API_URL;

export const petitionPaymentsMonthly = async (
  userId: string
): Promise<string | undefined> => {
  try {
    const response = await axios.get(
      `${API_PUBLIC}/payments/monthly/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
