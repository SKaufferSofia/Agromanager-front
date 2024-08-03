import {
  ILoginForm,
  IRegisterForm,
  IUserGoogle,
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

export const loginGoogle = async (
  googleId: IUserGoogle,
  saveToken: SaveToken,
  signIn: SignIn,
  userData: SaveUserData,
  cookieToken: SaveToken
): Promise<any> => {
  try {
    const response = await axios.post(`${API}/auth/google`, googleId);
    saveToken(response.data.token);
    signIn(response.data.isLoggin);
    userData(response.data.user);
    cookieToken(response.data.token);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const axiosError = error.response.data.message;
      alert("error: " + axiosError);
    }
    return false;
  }
};

export const getUserById = async (
  id: string,
  token: string,
  saveUser: SaveUserData
): Promise<any> => {
  try {
    const response = await axios.get(`${API}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    saveUser(response.data);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const axiosError = error.response.data.message;
      alert("error: " + axiosError);
    }
    return false;
  }
};
