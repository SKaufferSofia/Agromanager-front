import {
  ILoginForm,
  IRegisterForm,
  SaveToken,
  SaveUserData,
  SignIn,
} from "@/interfaces/interfacesUser";
import { NEXT_PUBLIC_API_URL } from "./envs";
import axios from "axios";
import { Toaster, toast } from "sonner"

const API = NEXT_PUBLIC_API_URL;

export const petitionRegister = async (regiterData: IRegisterForm) => {
  try {
    const response = await axios.post(`${API}/auth/signup`, regiterData);
      toast("Registro exitoso", {
				className:
					"mt-20 text-white bg-footerColor font-semibold text-xl justify-center w-auto",
				duration: 2000,
			});
    return response.data;
  } catch (error: any) {
   if (axios.isAxiosError(error) && error.response) {
      const axiosError = error.response.data.message;
      toast.warning(axiosError, {
      className: 'bg-red-500 text-white text-lg justify-center w-auto', 
      duration: 3000,
    });
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
    toast("Login exitoso", {
				className:
					"mt-20 text-white bg-footerColor font-semibold text-xl justify-center w-auto",
				duration: 2000,
			});
    return true;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      const axiosError = error.response.data.message;
      toast.warning(axiosError, {
      className: 'bg-red-500 text-white text-xl justify-center w-auto', 
      duration: 2000,
    });
    }
    return false;
  }
};
