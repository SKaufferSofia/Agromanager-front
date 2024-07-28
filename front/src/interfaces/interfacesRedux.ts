import { IPlotsType } from "./interfaces";
import { IUser } from "./interfacesUser";

export interface IInitialState {
  isLoggin: boolean;
  token: string;
  userData: IUser;
  plot: IPlotsType[];
}
