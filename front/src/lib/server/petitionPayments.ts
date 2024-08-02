import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "./envs";

const API_PUBLIC = NEXT_PUBLIC_API_URL;

export const petitonPaymentsFree = async (
  userId: string
): Promise<string | undefined> => {
  try {
    const response = await axios.get(
      `${API_PUBLIC}/users/premium/freetrial/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const petitionPaymentsMonthly = async (
  userId: string
): Promise<string | undefined> => {
  try {
    const response = await axios.get(`${API_PUBLIC}/payment/monthly/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
