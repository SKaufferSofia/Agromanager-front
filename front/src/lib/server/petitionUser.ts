import { NEXT_PUBLIC_API_URL } from "./envs";
import axios from "axios";
import {
  ILoginForm,
  IRegisterForm,
  SaveToken,
  SaveUserData,
  SignIn,
} from "@/interfaces/interfaces";

const API = NEXT_PUBLIC_API_URL;

export const petitionRegister = async (
  regiterData: IRegisterForm,
  userData: SaveUserData
) => {
  try {
    const response = await axios.post(`${API}/auth/signup`, regiterData);
    userData(response.data.rest);
    return true;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const axiosError = error.response.data.message;
      alert("error: " + axiosError);
    }
    return false;
  }
};

export const PetitionLogin = async (
  loginData: ILoginForm,
  saveToken: SaveToken,
  signIn: SignIn
): Promise<boolean> => {
  try {
    const response = await axios.post(`${API}/auth/signin`, loginData);
    saveToken(response.data.token);
    signIn(response.data.isLoggin);

    return true;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const axiosError = error.response.data.message;
      alert("error: " + axiosError);
    }
    return false;
  }
};
