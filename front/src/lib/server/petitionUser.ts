import { NEXT_PUBLIC_API_URL } from "./envs";
import axios from "axios";
import {
  ILoginForm,
  IRegisterForm,
  SaveToken,
  SaveUserData,
} from "@/interfaces/interfaces";

const API = NEXT_PUBLIC_API_URL;

// const petitionRegister = async (data: IRegisterForm) => {
//     try {
//         const response = await axios.post(`${API}/auth/signup`, data);
//     }
// }
