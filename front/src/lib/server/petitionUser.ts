import {
  ILoginForm,
  IRegisterForm,
  SaveToken,
  SaveUserData,
  SignIn,
} from "@/interfaces/interfacesUser";
import { NEXT_PUBLIC_API_URL } from "./envs";
import axios from "axios";

const API = NEXT_PUBLIC_API_URL;

export const petitionRegister = async (regiterData: IRegisterForm) => {
  try {
    const response = await axios.post(`${API}/auth/signup`, regiterData);
    return response.data;
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
  signIn: SignIn,
  userData: SaveUserData,
  cookieToken: SaveToken
): Promise<boolean> => {
  try {
    const response = await axios.post(`${API}/auth/signin`, loginData);
    saveToken(response.data.token);
    signIn(response.data.isLoggin);
    userData(response.data.user);
    cookieToken(response.data.token);
    return true;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const axiosError = error.response.data.message;
      alert("error: " + axiosError);
    }
    return false;
  }
};
